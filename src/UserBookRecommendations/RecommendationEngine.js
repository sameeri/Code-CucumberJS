// Recommendation Engine has the following dependencies
// A guy who goes to Mongo or whatever and fetches all the books that are tagged with the User's interests
var _ = require('lodash');
var books = require('./Books');

function RecommendationEngine() {

    function buildRecommendations(interests, availableBooks) {
        var recommendations = _.filter(availableBooks, function matching(book){
            var matches = _.intersection(book.categories, interests);
            return matches.length != 0;
        });

        return _.pluck(recommendations, 'name');

    }
        function find(interests) {

            // Fetch from somewhere
            var availableBooks = books.fetch();

            //Build recommendations based on an algorithm
            var recommendations = buildRecommendations(interests, availableBooks);

            return recommendations;
        }

        this.find = find;
    }

    module.exports = RecommendationEngine;