// Declara uma variável chamada Bioquimico que receberá a definição da classe
var Bioquimico = /** @class */ (function () {

    // Função construtora da classe Bioquimico, executada quando um novo objeto é criado
    function Bioquimico(nome) {

        // Atribui o valor recebido no parâmetro nome ao atributo nome do objeto
        this.nome = nome;
    }

    // Cria um método chamado calcularMassaMolar no prototype da classe
    // Esse método recebe uma fórmula química como parâmetro
    Bioquimico.prototype.calcularMassaMolar = function (formula) {

        // Objeto que armazena as massas atômicas de alguns elementos químicos
        var massasAtomicas = {
            H: 1, // Hidrogênio
            C: 12, // Carbono
            O: 16, // Oxigênio
            N: 14 // Nitrogênio
        };

        // Variável que irá armazenar o valor total da massa molar
        var massaMolar = 0;

        // Expressão regular usada para identificar elementos químicos e suas quantidades na fórmula
        var regex = /([A-Z][a-z]*)(\d*)/g;

        // Variável que armazenará os resultados encontrados pela expressão regular
        var match;

        // Loop que percorre todas as ocorrências encontradas na fórmula química
        while ((match = regex.exec(formula)) !== null) {

            // Obtém o símbolo do elemento químico encontrado
            var elemento = match[1];

            // Obtém a quantidade de átomos do elemento (se não existir, assume 1)
            var quantidade = parseInt(match[2] || '1');

            // Verifica se o elemento existe na tabela de massas atômicas
            if (massasAtomicas[elemento]) {

                // Soma à massa molar o valor da massa atômica multiplicado pela quantidade de átomos
                massaMolar += massasAtomicas[elemento] * quantidade;
            }
            else {

                // Caso o elemento não exista na tabela, gera um erro informando elemento desconhecido
                throw new Error("Elemento desconhecido: ".concat(elemento));
            }
        }

        // Retorna o valor total calculado da massa molar
        return massaMolar;
    };

    // Método que calcula a massa molar e retorna uma mensagem com o resultado
    Bioquimico.prototype.calcularEMostrarMassaMolar = function (formula) {

        // Chama o método calcularMassaMolar passando a fórmula química
        var massaMolar = this.calcularMassaMolar(formula);

        // Retorna uma frase informando quem calculou e qual foi o resultado
        return "O bioquímico ".concat(this.nome, " calculou a massa molar de ").concat(formula, " e chegou ao valor de ").concat(massaMolar, ".");
    };

    // Retorna a definição da classe Bioquimico
    return Bioquimico;

// Função imediatamente executada que cria a estrutura da classe
}());

// Cria um novo objeto da classe Bioquimico com o nome "Maria"
var bioquimico = new Bioquimico("Maria");

// Executa o método calcularEMostrarMassaMolar com a fórmula H2O e exibe o resultado no console
console.log(bioquimico.calcularEMostrarMassaMolar("H2O"));