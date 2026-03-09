//Função em generics onde trata-se de um array que pode-se utilizar diversas tipos de dados, como string, inteiros,
//dentre outros

function primeiroElemento<T>(arr: T[]): T{
    return arr[0];
}
let numeros = primeiroElemento([1, 2, 3]);
let palavras = primeiroElemento(['Olá','mundo']);

console.log(numeros)
console.log(palavras)
