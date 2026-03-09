// FIAP - Full Stack Development: Aula 02 - Abordagem sobre Paradigmas de programação
// Comentário informando o contexto da aula e do conteúdo estudado

// aprendendo sobre métodos, classes, atributos
// Comentário indicando os conceitos abordados no exemplo

// Declara uma variável chamada Pessoa que receberá a definição da classe
var Pessoa = /** @class */ (function () {

    // Função construtora da classe Pessoa, executada quando um novo objeto é criado
    function Pessoa(nome, idade) {

        // Atribui o valor do parâmetro nome ao atributo nome do objeto
        this.nome = nome;

        // Atribui o valor do parâmetro idade ao atributo idade do objeto
        this.idade = idade;
    }

    // Cria um método chamado saudacao dentro do prototype da classe Pessoa
    // Isso permite que todos os objetos da classe utilizem esse método
    Pessoa.prototype.saudacao = function () {

        // Exibe no console uma mensagem com o nome e a idade da pessoa
        console.log("Olá, meu nome é: ".concat(this.nome, " e tenho: ").concat(this.idade, " anos de idade"));
    };

    // Retorna a função Pessoa já configurada como classe
    return Pessoa;

// Executa imediatamente a função que cria a classe (IIFE - Immediately Invoked Function Expression)
}());

// Cria um novo objeto chamado aluno a partir da classe Pessoa
// Passa "Vinicius" como nome e 37 como idade
var aluno = new Pessoa('Vinicius', 37);

// Chama o método saudacao do objeto aluno
// Isso exibirá a mensagem no console
aluno.saudacao();