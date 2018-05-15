function RPNCalculator() {
  this.stack = [];

}

RPNCalculator.prototype.push = function (num) {
  this.stack.push(num);
}

RPNCalculator.prototype.plus = function () {

  if (this.stack.length < 2) throw "rpnCalculatorInstance is empty";

  let pop1 = this.stack.pop();
  let pop2 = this.stack.pop();

  this.stack.push(pop1 + pop2);
}

RPNCalculator.prototype.value = function () {
  return this.stack[this.stack.length - 1];
}

RPNCalculator.prototype.minus = function () {

  if (this.stack.length < 2) throw "rpnCalculatorInstance is empty";

  let pop1 = this.stack.pop();
  let pop2 = this.stack.pop();

  this.stack.push(pop2 - pop1);
}

RPNCalculator.prototype.divide = function () {

  if (this.stack.length < 2) throw "rpnCalculatorInstance is empty";

  let pop1 = this.stack.pop();
  let pop2 = this.stack.pop();

  this.stack.push(pop2 / pop1);
}

RPNCalculator.prototype.times = function () {

  if (this.stack.length < 2) throw "rpnCalculatorInstance is empty";

  let pop1 = this.stack.pop();
  let pop2 = this.stack.pop();

  this.stack.push(pop1 * pop2);
}