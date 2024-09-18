//Problem 03: Check if a Number is Even
//Write a JavaScript function that checks whether a given number is even.

//Requirements:
//Create a function called isEven.
//The function should accept one parameter: num.
//Return true if num is even, and false if it is odd.

//Simple version
/*
function isEven(num) {
  if (num % 2 === 0) {
    return "True";
  } else {
    return "False";
  }
}
*/

function isEven(num) {
  if (num % 2 === 0) {
    return `The number ${num} is even!`;
  } else {
    return `The number ${num} is not even.`;
  }
}

console.log(isEven(4));
