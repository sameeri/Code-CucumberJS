var _ = require('lodash');

function bookRecommendationSteps() {
    var state;

    this.Given(/^User Book Recommendations$/, function (callback) {
        var UserBookRecommendations = require('../objects/UserBookRecommendations.js');
        state = new UserBookRecommendations();
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
}

module.exports = bookRecommendationSteps;



