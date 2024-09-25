// Problema 06: Substituir todas as ocorrências de uma palavra em uma string
// Escreva uma função chamada replaceWord que recebe três argumentos:
// uma string principal, uma palavra a ser substituída, e uma nova palavra para colocar no lugar.
// A função deve retornar a string principal com todas as ocorrências da palavra antiga substituídas pela nova palavra.

function replaceWord(str, oldstr, newstr) {
  const regex = new RegExp(oldstr, "g");
  return str.replace(regex, newstr);
}

console.log(replaceWord("The quick quick brown fox", "quick", "slow"));
