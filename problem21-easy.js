// Problema 22 - Super Easy (Strings):
// Escreva uma função chamada removeSpaces que remove todos os espaços em branco de uma string.

function removeSpaces(str) {
  return str.replace(/\s+/g, "");
}

console.log(removeSpaces("Hello World bla bla"));
