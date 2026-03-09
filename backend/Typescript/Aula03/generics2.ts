// Interface: define um "contrato" que uma classe ou objeto deve seguir.
// Qualquer classe que implementar TemNome precisa ter a propriedade nome do tipo string.
interface TemNome {
    nome: string;
}

// Classe que IMPLEMENTA a interface TemNome.
// Isso garante que a classe obrigatoriamente tenha a propriedade "nome".
class Pessoa2 implements TemNome {
    nome: string; // propriedade exigida pela interface

    // Construtor: método executado ao criar um novo objeto da classe
    constructor(nome: string) {
        this.nome = nome; // atribui o valor recebido ao atributo da classe
    }
}

// Classe genérica (Generics)
// <T extends TemNome> significa que o tipo T deve obrigatoriamente possuir a estrutura da interface TemNome
// ou seja, precisa ter pelo menos a propriedade "nome".
class CaixaNome<T extends TemNome> {
    conteudo: T; // atributo do tipo genérico T

    // Construtor que recebe um objeto do tipo T
    constructor(conteudo: T){
        this.conteudo = conteudo;
    }
}

// Criação de um objeto da classe Pessoa2
let pessoa4 = new Pessoa2("Vinicius");

// Criação de um objeto da classe genérica CaixaNome
// O TypeScript infere automaticamente que T = Pessoa2
let caixa = new CaixaNome(pessoa4);

// Acessando o conteúdo da caixa e exibindo o nome no console
// Isso funciona porque T obrigatoriamente tem a propriedade "nome"
console.log(caixa.conteudo.nome);