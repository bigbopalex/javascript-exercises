const add = function(numA, numB) {
  return numA+numB;
};

const subtract = function(numA, numB) {
	return numA-numB;
};

const sum = function(numArr) {
  return numArr.reduce((total, current) => total += current, 0);
};

const multiply = function(numArr) {
  return numArr.reduce((total, current) => total *= current, 1);
};

const power = function(numA, numB) {
	let total = 1;
  for (let i=1 ; i<= numB ; i++){
    total *= numA;
  }
  return total;
};

const factorial = function(num) {
	let total = 1;
  for (let i=1 ; i<= num ; i++){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
