const convertToCelsius = value => {
  let fahrenheit = ((value - 32) * 5) / 9
  return Math.round(fahrenheit);
};

const convertToFahrenheit = value => {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
