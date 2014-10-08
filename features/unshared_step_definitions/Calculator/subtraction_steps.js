function subtractionStepDefinitions(calculator) {
    function iSubtractNumber1FromNumber2(num1, num2, callback) {
        calculator.subtract(parseInt(num1, 10), parseInt(num2, 10));
        callback();
    }

    this.When(/^I subtract (.*) from (.*)$/, iSubtractNumber1FromNumber2);
}




module.exports = subtractionStepDefinitions;