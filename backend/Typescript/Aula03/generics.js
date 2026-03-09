//Função em generics onde trata-se de um array que pode-se utilizar diversas tipos de dados, como string, inteiros,
//dentre outros
function primeiroElemento(arr) {
    return arr[0];
}
var numeros = primeiroElemento([1, 2, 3]);
var palavras = primeiroElemento(['Olá', 'mundo']);
console.log(numeros);
console.log(palavras);
