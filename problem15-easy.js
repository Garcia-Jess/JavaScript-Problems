//Problema 16 - Super Easy (Strings):
//Escreva uma função chamada repeatString que recebe uma string e um número como argumentos
//e retorna a string repetida o número de vezes especificado.

function repeatString(string) {
  return string.repeat(3);
}

console.log(repeatString("Hello"));

// A more flexible solution

function repeatString(string, times) {
  return string.repeat(times);
}

console.log(repeatString("Hello", 4));
