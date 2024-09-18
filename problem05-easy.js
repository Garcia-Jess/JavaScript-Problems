//Problema 06 - Super Easy:
//Escreva uma função chamada maximum que recebe dois números como argumentos e retorna o maior número entre eles.

/*
version with math
function maximum(num1, num2) {
  return Math.max(num1, num2);
}

console.log(maximum());
*/

function maximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log(maximum(10, 5));
