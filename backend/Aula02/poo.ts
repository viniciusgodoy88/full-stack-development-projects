//FIAP - Full Stack Development: Aula 02 - Abordagem sobre Paradigmas de programação
//aprendendo sobre métodos, classes, atributos

class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
            this.idade = idade;
    }
    saudacao() {
        console.log(`Olá, meu nome é: ${this.nome} e tenho: ${this.idade} anos de idade`);
    }
}
const aluno = new Pessoa('Vinicius', 37)
aluno.saudacao()