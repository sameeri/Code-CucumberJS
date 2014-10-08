function additionStepDefinitions(calculator) {
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


    this.When(/^I add (\d+) and (\d+)$/, iAddNumber1AndNumber2);

}

module.exports = additionStepDefinitions;