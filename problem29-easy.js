// Problema: Crie uma função chamada removeVowels que remove todas as vogais (a, e, i, o, u) de uma string passada como argumento.

// Dica: Você pode usar expressões regulares para resolver esse problema de forma eficiente.

function removeVowels(str) {
  let reg = /[aeiou]/gi;
  return str.replace(reg, "");
}

console.log(removeVowels("hello world"));
