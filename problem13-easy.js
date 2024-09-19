//Problema 14 - Super Easy (Strings):
//Escreva uma função chamada reverseString que recebe uma string como argumento e retorna essa string invertida.

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString("Javascript"));
