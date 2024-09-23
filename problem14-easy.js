//Problema 15 - Super Easy (Strings):
//Escreva uma função chamada countVowels que recebe uma string como argumento e retorna o número de vogais (a, e, i, o, u) na string.

function countVowels(string) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of string.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello"));
