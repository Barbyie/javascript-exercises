const sumAll = function(arg1, arg2) {
  let sum = 0;
  if (arg1 < arg2) {
    for (let i = arg1 ; i <= arg2; i++) {
      sum += (i);
    };
    return sum;
  }else {
    for (let i = arg2 ; i <= arg1; i++) {
      sum += (i);
    };
    return sum;
  };
};

// Do not edit below this line
module.exports = sumAll;
