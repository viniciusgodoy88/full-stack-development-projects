//FIAP - Full Stack Development: Aula 02 - Abordagem sobre Paradigmas de programação
//aprendendo sobre métodos, classes, atributos
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.saudacao = function () {
        console.log("Ol\u00E1, meu nome \u00E9: ".concat(this.nome, " e tenho: ").concat(this.idade, " anos de idade"));
    };
    return Pessoa;
}());
var aluno = new Pessoa('Vinicius', 37);
aluno.saudacao();
