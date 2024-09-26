// Problema: Crie uma função que conte quantas vezes uma letra específica aparece em uma string.

// Dica: A função deve receber dois parâmetros: a string e a letra que você quer contar.

function countLetter(str, letter) {
  let count = 0;

  for (let char of str) {
    if (char.toLowerCase() === letter.toLowerCase()) {
      count++;
    }
  }

  return count;
}

console.log(countLetter("hello", "h"));
