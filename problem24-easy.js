// Problema 05: Verificar se uma string contém uma palavra específica
// Escreva uma função chamada containsWord que recebe duas strings: a primeira é a string principal,
// e a segunda é a palavra a ser verificada.
// A função deve retornar true se a palavra estiver contida na string principal e false caso contrário.

function containsWord(str, ver) {
  return str.includes(ver);
}

console.log(containsWord("The quick brown fox", "quick"));
