const convertToCelsius = value => {
  let fahrenheit = ((value - 32) * 5) / 9;
  return Number(fahrenheit.toFixed(1));
};

const convertToFahrenheit = value => {
  let celsius = (value * 1.8) + 32;
  return Number(celsius.toFixed(1)); 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
