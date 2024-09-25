// Problema 07: Verificar se uma string é um anagrama
// Escreva uma função chamada isAnagram que verifica se duas strings são anagramas uma da outra.
// Duas palavras são anagramas se elas contêm as mesmas letras na mesma quantidade, mas em ordem diferente.

function isAnagram(str1, str2) {
  // Remover espacos e transformar tudo em minúsculas
  str1 = str1.replace(/\s+/g, "").toLowerCase();
  str2 = str2.replace(/\s+/g, "").toLowerCase();

  // comparar os comprimentos das strings
  if (str1.length !== str2.length) {
    return false;
  }

  // Ordenar as letras de ambas as strings

  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");

  // Comparar as strings ordenadas

  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "silent"));
