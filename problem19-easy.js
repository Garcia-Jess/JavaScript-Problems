// Problema 20 - Super Easy (Strings):
// Escreva uma função chamada isPalindrome que recebe uma string como argumento
// e retorna true se a string for um palíndromo (a mesma sequência de letras lida de trás para frente)
// e false caso contrário.

function isPalindrome(str) {
  let reversedString = str.toLowerCase().split("").reverse().join("");

  if (str.toLowerCase() === reversedString) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("madam"));
