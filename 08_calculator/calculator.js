const add = function(numA, numB) {
  return numA+numB;
};

const subtract = function(numA, numB) {
	return numA-numB;
};

const sum = function(numArr) {
  let total = 0;
	for (num of numArr){
    total += num;
  }
  return total;
};

const multiply = function(numArr) {
  let total = 1;
	for (num of numArr){
    total *= num;
  }
  return total;
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
