const add = function(num1, num2) {
  return num1 + num2; 
};

const subtract = function(num1, num2) {
  return num1 - num2;	
};

const sum = function(array) {
  if (array.length === 0) {
    return 0;
  }else {
  return array.reduce((total, num1) => {
    return total + num1;
  }, 0);
  };
};

const multiply = function(array) {
  
  return array.reduce((total, num1) => {
    return total * num1; 
  });

};

const power = function(num1, num2) {
  return num1 ** num2;	
};

const factorial = function() {
	
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
