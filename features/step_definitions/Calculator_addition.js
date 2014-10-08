//This is a node module. First export this definition to the outside world
//If you do not do it, then cucumber will throw error.

var chai = require('chai').should(),
    Calculator = require('../../src/Calculator.js');

function additionStepDefinitions() {

    var calculator;

    function aCalculator(callback) {
        //Setup the main context object here
        calculator = new Calculator();
        callback();
    }

    function theCalculatorIsClear(callback) {
        // Set up conditions for the test
        calculator.result = 0;
        callback();
    }

    function iAddNumber1AndNumber2(num1, num2, callback) {
        //Perform action

        //Note these arguments are strings
        //https://github.com/cucumber/cucumber-js/issues/45
        console.log(typeof num1);
        console.log(typeof num2);

        //Our calculator only works with numbers :), parse the arguments
        calculator.add(parseInt(num1, 10), parseInt(num2, 10));
        callback();
    }

    function theResultShouldBe(result, callback) {
        //Assert result
        var expectedResult = parseInt(result, 10);
        calculator.result.should.equal(expectedResult);
        callback();
    }

    this.Given(/^A calculator$/, aCalculator);

    this.Given(/^the calculator is clear$/, theCalculatorIsClear);

    this.When(/^I add (\d+) and (\d+)$/, iAddNumber1AndNumber2);

    this.Then(/^the result should be (\d+)$/, theResultShouldBe);

}

module.exports = additionStepDefinitions;