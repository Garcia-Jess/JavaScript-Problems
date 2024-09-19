//Problema 13 - Super Easy (Strings):
//Escreva uma função chamada concatStrings que recebe duas strings como argumentos e retorna a concatenação dessas duas strings.

function concatStrings(string1, string2) {
  return string1.concat(" ", string2);
}

console.log(concatStrings("Hello", "World"));
