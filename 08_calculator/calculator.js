const add = function() {
	let result = 0;
  for (i=0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

const subtract = function() {
  let result = arguments[0];
  for (i=1; i < arguments.length; i++) {
    result -= arguments[i];
  }
  return result;
};

const sum = function() {
  return result = arguments[0].reduce((total, argument) => total + argument, 0);
};

const multiply = function() {
  return result = arguments[0].reduce((total, argument) => total * argument, 1);
};

const power = function(number, exponent) {
  return number**exponent;
};

const factorial = function(number) {
	let initialValue = 1;
  if (number===0) {
    return initialValue;
  } else {
    for (i=1; i<=number; i++) {
      initialValue *= i;
    }
    return initialValue;
  }
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
