/* Problem 04: Convert Celsius to Fahrenheit
Write a JavaScript function that converts a given temperature in Celsius to Fahrenheit.

Requirements:
Create a function called celsiusToFahrenheit.
The function should accept one parameter: celsius.
Use the formula: Fahrenheit = (Celsius * 9/5) + 32.
Return the converted temperature in Fahrenheit. */

function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(celsiusToFahrenheit(25));
