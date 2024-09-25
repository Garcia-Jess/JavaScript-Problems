// Problema 04: Contar palavras em uma string
// Escreva uma função chamada countWords que recebe uma string e retorna o número de palavras que ela contém.
// Considere que as palavras são separadas por espaços.

function countWords(str) {
  let count = str.split(/\s/).length;

  return count;
}

console.log(countWords("Hello world from JavaScript!"));
