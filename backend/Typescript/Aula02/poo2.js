// Função auxiliar gerada automaticamente pelo TypeScript
// quando utilizamos HERANÇA (extends) e compilamos para JavaScript.
// Essa função simula o comportamento de herança entre classes no JS antigo.
var __extends = (this && this.__extends) || (function () {

    // Função responsável por copiar propriedades estáticas
    // da classe base (b) para a classe derivada (d)
    var extendStatics = function (d, b) {

        // Usa Object.setPrototypeOf caso esteja disponível
        // para criar a ligação de herança entre os protótipos
        extendStatics = Object.setPrototypeOf ||

            // Caso não exista suporte ao método acima,
            // utiliza __proto__ para fazer a ligação entre os protótipos
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||

            // Caso nenhuma das opções anteriores funcione,
            // copia manualmente as propriedades da classe base
            function (d, b) {
                for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p))
                        d[p] = b[p];
            };

        return extendStatics(d, b);
    };

    // Função principal que realiza a herança
    return function (d, b) {

        // Verifica se a classe base é válida
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

        // Estabelece a herança estática
        extendStatics(d, b);

        // Função auxiliar para configurar o protótipo
        function __() { this.constructor = d; }

        // Cria a cadeia de protótipos entre as classes
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


// Classe base (classe pai)
// Representa um conceito genérico de Animal
// Conceito utilizado: HERANÇA (classe que será herdada)
var Animal = /** @class */ (function () {

    // Construtor da classe Animal
    // Recebe a espécie do animal como parâmetro
    function Animal(especie) {

        // Atributo da classe
        // Conceito: ENCAPSULAMENTO (dados dentro da classe)
        this.especie = especie;
    }

    // Método que retorna a espécie do animal
    Animal.prototype.getEspecie = function () {
        return this.especie;
    };

    // Método genérico que representa um comportamento
    // que pode ser sobrescrito pelas subclasses
    Animal.prototype.fazerSom = function () {

        // Implementação padrão
        console.log("O animal faz um som.");
    };

    return Animal;
}());


// Classe Cachorro que HERDA da classe Animal
// Conceito utilizado: HERANÇA (extends)
// Cachorro é uma especialização de Animal
var Cachorro = /** @class */ (function (_super) {

    // __extends cria a ligação de herança entre Cachorro e Animal
    __extends(Cachorro, _super);

    // Construtor da classe Cachorro
    function Cachorro() {

        // Chama o construtor da classe pai (Animal)
        return _super !== null && _super.apply(this, arguments) || this;
    }

    // Método sobrescrito
    // Conceito: POLIMORFISMO
    // A classe filha redefine o comportamento do método da classe pai
    Cachorro.prototype.fazerSom = function () {

        // Implementação específica para cachorro
        console.log("O cachorro late.");
    };

    return Cachorro;

}(Animal)); // Indica que Cachorro herda de Animal



// Classe Gato que também HERDA de Animal
// Demonstra novamente HERANÇA
var Gato = /** @class */ (function (_super) {

    // Cria a relação de herança com Animal
    __extends(Gato, _super);

    // Construtor da classe Gato
    function Gato() {

        // Chama o construtor da classe pai
        return _super !== null && _super.apply(this, arguments) || this;
    }

    // Sobrescrita do método fazerSom
    // Conceito: POLIMORFISMO
    // Cada classe implementa o método de forma diferente
    Gato.prototype.fazerSom = function () {

        console.log("O gato mia.");
    };

    return Gato;

}(Animal));


// Criação de um objeto da classe Cachorro
// Conceito: INSTANCIAÇÃO DE OBJETO
var meuAnimal = new Cachorro("Cachorro");


// Chamada do método fazerSom()
// Como o objeto é da classe Cachorro,
// será executada a versão sobrescrita do método
// Conceito: POLIMORFISMO EM TEMPO DE EXECUÇÃO
meuAnimal.fazerSom(); // chama o método da classe Cachorro