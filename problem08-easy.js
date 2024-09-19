//Problema 09 - Super Easy:
//Escreva uma função chamada isOdd que recebe um número como argumento e retorna true se o número for ímpar e false se for par.

function isOdd(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(4));
