//This is a node module. First export this definition to the outside world
//If you do not do it, then cucumber will throw error.

var chai = require('chai').should(),
    Calculator = require('../../../src/Calculator.js');

var additionSteps = require('../../unshared_step_definitions/Calculator/additionSteps');
var subtractionSteps = require('../../unshared_step_definitions/Calculator/subtractionSteps');

function commonStepDefinitions() {

    var calculator = new Calculator();

    function aCalculator(callback) {
        //Setup the main context object here

        //We cannot do this anymore. We have to do it outside.
        //calculator = new Calculator();

        //Why can't we? We are passing a reference. So if this changes, it should change
        //even in the other function.

        //Answer: You are stupid. You are passing undefined, not a function reference at the
        //point where you call the various step definitions, if you do it here. The context should
        //be passed.


        callback();
    }

    function theCalculatorIsClear(callback) {
        // Set up conditions for the test
        calculator.result = 0;
        callback();
    }

    function theResultShouldBe(result, callback) {
        //Assert result
        var expectedResult = parseInt(result, 10);
        calculator.result.should.equal(expectedResult);
        callback();
    }

    console.log(this);

    this.Given(/^A calculator$/, aCalculator);

    this.Given(/^the calculator is clear$/, theCalculatorIsClear);

    this.Then(/^the result should be (\d+)$/, theResultShouldBe);

    // We have to know what all context is necessary for these steps, so pass in calculator
    // We are just following the pattern of cucumber-js. Atleast we are assuming this is what
    // cucumber-js is doing.
    additionSteps.call(this, calculator);
    subtractionSteps.call(this, calculator);

}

module.exports = commonStepDefinitions;