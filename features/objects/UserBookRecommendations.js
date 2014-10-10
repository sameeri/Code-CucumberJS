var _ = require('lodash');

var User = require('../../src/UserBookRecommendations/User'),
    RecommendationEngine = require('../../src/UserBookRecommendations/RecommendationEngine'),
    Books = require('../../src/UserBookRecommendations/Books');

module.exports = function () {
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

        //Perform action
        var sinon = require('sinon');

        var bookStub = sinon.stub(Books, 'fetch');
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
};