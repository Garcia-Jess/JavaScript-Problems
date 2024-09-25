// Problema:
// Escreva uma função chamada endsWith que recebe duas strings como parâmetros.
// A função deve verificar se a primeira string termina com a segunda string e retornar true ou false dependendo do caso.

// com método endsWith()
function endsWith(str1, str2) {
  return str1.endsWith(str2);
}

// Com expressao regular

function endsWith(str1, str2) {
  let reg = new RegExp(str2 + "$", "i");

  return reg.test(str1);
}

console.log(endsWith("javascriPT", "script"));
