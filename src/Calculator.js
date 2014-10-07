function Calculator(){

    this.result = 0;
}

Calculator.prototype.add = function add(num1, num2){
    var result = num1 + num2;
    this.result = result;
}



module.exports = Calculator;