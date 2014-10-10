var sinon = require('sinon');

function bookRecommendationSteps() {
    var state;
    console.log("Steps called");

    var UserBookRecommendations = require('../objects/UserBookRecommendations.js');
    var Books = require('../../src/UserBookRecommendations/Books');
    var BookStub=sinon.stub(Books, 'fetch');

    this.Given(/^User Book Recommendations$/, function (callback) {
        console.log("Called Background User Book Recommendations");
        state = new UserBookRecommendations(BookStub);
        callback();
    });

    this.Given(/^a user \"([^\"]*)\"$/, function (username, callback) {
        state.givenAUser(username);
        callback();
    });

    this.Given(/^the user has the following interests$/, function (userInterests, callback) {
        state.givenTheUserHasTheFollowingInterests(userInterests);
        callback();
    });

    this.Given(/^the following books with categories exist$/, function (availableBooks, callback) {
        state.givenTheFollowingBooksWithCategoriesExist(availableBooks);
        callback();
    });

    this.Given(/^No books exist$/, function (callback) {
        state.givenNoBooksExist();
        callback();
    });

    this.When(/^the user wants to find book recommendations$/, function (callback) {
        state.whenTheUserWantsToFindBookRecommendations();
        callback();
    });

    this.Then(/^the user should be recommended with the following books$/, function (expectedBooks, callback) {
        state.thenTheUserShouldBeRecommendedWithTheFollowingBooks(expectedBooks);
        callback();
    });

    this.Then(/^the user should not be recommended any books$/, function (callback) {
        state.thenTheUserShouldNotBeRecommendedAnyBooks();
        callback();
    });

    this.Given(/^the user has a certain interest (.*)$/, function (interest, callback) {
        state.theUserHasACertainInterest(interest);
        callback();
    });

    this.Then(/^the user should be given the following recommendation (.*)$/, function (recommendation, callback) {
        state.theUserShouldBeGivenTheFollowingRecommendation(recommendation);
        callback();
    });
}

module.exports = bookRecommendationSteps;



