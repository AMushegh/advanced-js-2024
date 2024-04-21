function Calculator(init = 0) {
  // let this = {}
  this.res = init;

  this.getResult = function () {
    console.log(this.res);
  };

  this.plus = function (v) {
    this.res += v;
  };

  this.minus = function (v) {
    this.res -= v;
  };

  this.multiply = function (v) {
    this.res *= v;
  };

  this.divide = function (v) {
    if (v === 0) {
      console.error("error: argument cannot be equal to 0");
      return;
    }
    this.res /= v;
  };
}

const calculator = new Calculator();
calculator.plus(5); // add 5 to the result
calculator.minus(3); // subtract 3 from result
calculator.multiply(3); // multiply result by 3
calculator.divide(2); // divide result on 2
calculator.getResult(); // Returns the result
