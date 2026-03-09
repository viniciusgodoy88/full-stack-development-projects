//FIAP - Full Stack Development: Aula 02 - Abordagem sobre Paradigmas de programação
//aprendendo sobre métodos, classes, atributos

// Definição da classe chamada Pessoa
class Pessoa {

    // Propriedade que armazenará o nome da pessoa (tipo string)
    nome: string;

    // Propriedade que armazenará a idade da pessoa (tipo number)
    idade: number;

    // Método construtor da classe, executado quando um novo objeto é criado
    constructor(nome: string, idade: number) {

        // Atribui o valor recebido no parâmetro "nome" à propriedade da classe
        this.nome = nome;

        // Atribui o valor recebido no parâmetro "idade" à propriedade da classe
        this.idade = idade;
    }

    // Método da classe responsável por exibir uma saudação no console
    saudacao() {

        // Exibe no console uma mensagem utilizando os valores das propriedades da classe
        console.log(`Olá, meu nome é: ${this.nome} e tenho: ${this.idade} anos de idade`);
    }
}

// Cria uma nova instância (objeto) da classe Pessoa com nome "Vinicius" e idade 37
const aluno = new Pessoa('Vinicius', 37)

// Chama o método saudacao do objeto criado, exibindo a mensagem no console
aluno.saudacao()