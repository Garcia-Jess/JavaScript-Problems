// Problema 18 - Super Easy (Strings):
// Escreva uma função chamada capitalizeFirstLetter que recebe uma string como argumento.
// A função deve retornar a string com a primeira letra de cada palavra em maiúscula.

function capitalizeFirstLetter(str) {
  let myArray = str.split(" ");
  let capitalizedArray = [];

  for (let elem of myArray) {
    capitalizedArray.push(elem[0].toUpperCase() + elem.slice(1));
  }

  return capitalizedArray.join(" ");
}

console.log(capitalizeFirstLetter("hello world"));
