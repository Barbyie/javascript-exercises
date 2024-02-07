const removeFromArray = function(array, value1, value2) {
  let newArray = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] === value1 || array[i] === value2) {
      array.splice(i, 1);
    };
  };
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
