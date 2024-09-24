// Problema 03: Remover dígitos de uma string
// Escreva uma função removeDigits que recebe uma string e retorna a mesma string,
// mas com todos os dígitos (números) removidos.

function removeString(str) {
  return str.match(/\D/g).join("");
}

console.log(removeString("hello123"));
