const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit-32)*(5/9);
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius*(9/5)+32;
  return Math.round(fahrenheit * 10) / 10;
};

// Math.round(number * 10) / 10
// C to F: C*(9/5)+32
// F to C: (F-32)*(5/9)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
