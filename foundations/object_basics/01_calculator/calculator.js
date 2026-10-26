const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((cum, curr) => cum+curr, 0)
};

const multiply = function(arr) {
  return arr.reduce((cum, curr) => cum*curr, 1)
};

const power = function(a, b) {
	let x = 1
  for (let i = 0; i < b; i++) {
    x *= a;
  }
  return x;
};

const factorial = function(a) {
	let x = 1
  for (let i = 1; i <= a; i++) {
    x *= i;
  }
  return x;
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
