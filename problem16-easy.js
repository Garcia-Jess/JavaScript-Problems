// Problema 17 - Super Easy (Strings):
// Escreva uma função chamada truncateString que recebe uma string e um número como argumentos.
// A função deve retornar a string truncada para o número de caracteres especificado,
//seguido de "..." se a string for mais longa que o limite fornecido.

function truncateString(string, length) {
  if (string.length > length) {
    return string.slice(0, length) + "...";
  }
  return string;
}

console.log(truncateString("Hello, World", 5));
