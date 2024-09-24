// Problema 21 - Super Easy (Strings):
// Escreva uma função chamada countVowels que conta o número de vogais em uma string.
// As vogais são 'a', 'e', 'i', 'o', 'u', e a função deve ser case insensitive (não deve diferenciar maiúsculas de minúsculas).

function countVowels(str) {
  let vowels = "aeiou";
  let vowelCount = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }
  return vowelCount;
}

console.log(countVowels("hella"));
