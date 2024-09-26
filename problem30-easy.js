// Problema: Escreva uma função chamada findLongestWord que recebe uma string de palavras separadas por espaços
// e retorna a palavra mais longa dessa string.

function findLongestWord(str) {
  const newStr = str.split(" ");

  const longestWord = newStr.reduce((word, currentWord) => {
    if (word.length > currentWord.length) {
      return word;
    } else {
      return currentWord;
    }
  });

  return longestWord;
}

console.log(findLongestWord("I love javascript"));
