
var _ = require('lodash'),
    sinon = require('sinon');

var User = require('../../../src/UserBookRecommendations/User'),
    RecommendationEngine = require('../../../src/UserBookRecommendations/RecommendationEngine'),
    Books = require('../../../src/UserBookRecommendations/Books');


function bookRecommendationSteps(){

    /*
        Let's first denote the main points of this feature.
        We have the concept of a User,
        We have the concept of User's Interests,
        We have the concept of Finding Recommendations based on a user's interests,
        We have the concept of Recommendations.

        Usually, we would sit with the PM, or the StakeHolder to get a clear definition of the terms.
        Let's say we came up with the following terms.
        At the point of discussion, we tell the PM,
        We can make this generic and based on user's interests we can find other recommendations
        for example Movies, if at a later point of time we want to extend this system.

     */

    var user,
        books,
        recommendationEngine,
        recommendations;

    user = new User();
    recommendationEngine = new RecommendationEngine();

    this.Given(/^a user \"([^\"]*)\"$/, function (userName, callback) {
        //user = new User(userName); // we can't do this here because of closures.
        user.name = userName;
        callback();
    });

    this.Given(/^the user has the following interests$/, function (userInterests, callback) {

        var interests = [];

        _.each(userInterests.hashes(), function(interest){
           interests.push(interest['Interest']);
        });

        user.hasInterests(interests);
        callback();
    });

    this.Given(/^the following books with categories exist$/, function (availableBooks, callback) {

        // The recommendationEngine would contact an API, a Database,
        // or whatever to find books that match the User's interests.
        // The table denotes such data that has been delivered.
        // The recommendationEngine would depend on an external system essentially.
        // We would probably set up our mocks over here!

        books = [];

        _.each(availableBooks.hashes(), function(book){

            var b = {
                name: book['Book'],
                categories: book['Category'].split(',')
            };

            books.push(b);
        });

        sinon.stub(Books, 'fetch').returns(books);

        callback();
    });

    this.When(/^the user wants to find book recommendations$/, function (callback) {

        //Perform action

        recommendations = recommendationEngine.find(user.interests);

        console.log('recommendations', recommendations);
        callback();
    });

    this.Then(/^the user should be recommended with the following books$/, function (expectedBooks, callback) {

        // Make assertions
        recommendations.length.should.equal(3);

        books = [];

        _.each(expectedBooks.hashes(), function(book){
            recommendations.should.include(book['Recommendations']);
        });

        callback();
    });
}

module.exports = bookRecommendationSteps;



