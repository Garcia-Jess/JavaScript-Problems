//Problema 19 - Super Easy (Strings):
//Escreva uma função chamada countVowels que recebe uma string como argumento
//e retorna o número de vogais (a, e, i, o, u) presentes na string.

function countVowels(str) {
  let vowels = "aeiu";
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("JavaScript"));
