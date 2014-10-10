var _ = require('lodash');

var User = require('../../src/UserBookRecommendations/User'),
    RecommendationEngine = require('../../src/UserBookRecommendations/RecommendationEngine');

module.exports = function (bookStub) {
    var user,
        books,
        recommendationEngine,
        recommendations;
    user = new User();
    recommendationEngine = new RecommendationEngine();
    this.givenAUser = function (username) {
        user.name = username;
    };

    this.givenTheUserHasTheFollowingInterests = function (userInterests) {
        var interests = [];
        _.each(userInterests.hashes(), function (interest) {
            interests.push(interest['Interest']);
        });
        user.hasInterests(interests);
    };

    this.givenTheFollowingBooksWithCategoriesExist = function (availableBooks) {

        // The recommendationEngine would contact an API, a Database,
        // or whatever to find books that match the User's interests.
        // The table denotes such data that has been delivered.
        // The recommendationEngine would depend on an external system essentially.
        // We would probably set up our mocks over here!

        books = [];

        _.each(availableBooks.hashes(), function (book) {

            var b = {
                name: book['Book'],
                categories: book['Category'].split(',')
            };

            books.push(b);
        });

    };

    this.givenNoBooksExist = function () {
        books = [];
    };

    this.whenTheUserWantsToFindBookRecommendations = function () {
        bookStub
            .returns(books);

        recommendations = recommendationEngine.find(user.interests);
    };

    this.thenTheUserShouldBeRecommendedWithTheFollowingBooks = function (expectedBooks) {

        // Make assertions
        recommendations.length.should.equal(3);

        _.each(expectedBooks.hashes(), function (book) {
            recommendations.should.include(book['Recommendations']);
        });
    };

    this.thenTheUserShouldNotBeRecommendedAnyBooks = function () {

        // Make assertions
        recommendations.length.should.equal(0);
    };

    this.theUserHasACertainInterest = function(interest){
        var interests = [];
        interests.push(interest);
        user.hasInterests(interests);
    };

    this.theUserShouldBeGivenTheFollowingRecommendation = function(recommendationsString){
        var expectedRecommendations = recommendationsString.split(', ');
        console.log('----expectedRecommendations----', expectedRecommendations);
        console.log('----recommendations----', recommendations);

        _.each(expectedRecommendations, function(recommendation){
            console.log('----recommendation----', recommendation);
            recommendations.should.include(recommendation)
        });
    }
};