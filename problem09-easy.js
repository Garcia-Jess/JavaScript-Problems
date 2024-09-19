//Problema 10 - Super Easy:
//Escreva uma função chamada getFirstElement que recebe um array como argumento e retorna o primeiro elemento desse array.
//Se o array estiver vazio, a função deve retornar "Array is empty".

function getFirstElement(list) {
  if (list.length !== 0) {
    return list[0];
  } else {
    return "Array is empty";
  }
}

console.log(getFirstElement([]));
