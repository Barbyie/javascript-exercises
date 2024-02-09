const convertToCelsius = value => {
  let fahrenheit = ((value - 32) * 5) / 9
  return Number(fahrenheit.toFixed(1));
};

const convertToFahrenheit = value => {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
