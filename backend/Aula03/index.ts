// Interface representa um CONTRATO.
// Ela define quais propriedades e métodos uma classe deve possuir.
// Conceito utilizado: ABSTRAÇÃO
interface Quimico {

    // Propriedade obrigatória que qualquer classe que implementar
    // a interface Quimico deve possuir.
    // Tipagem estática do TypeScript (string)
    nome: string;

    // Método obrigatório definido pela interface.
    // Recebe uma formula química (string)
    // e retorna um número (massa molar).
    calcularMassaMolar(formula: string): number;
}


// Classe Bioquimico
// "implements Quimico" significa que a classe é obrigada
// a implementar tudo que foi definido na interface.
// Conceito: IMPLEMENTAÇÃO DE INTERFACE
class Bioquimico implements Quimico {

    // Propriedade da classe exigida pela interface
    // Conceito: ENCAPSULAMENTO (dados dentro da classe)
    nome: string;

    // Construtor da classe
    // É executado automaticamente quando um objeto da classe é criado
    // Conceito: INSTANCIAÇÃO DE OBJETO
    constructor(nome: string) {

        // "this" representa o objeto atual da classe
        // Atribui o nome recebido ao atributo do objeto
        this.nome = nome;
    }

    // Implementação do método definido na interface
    // Recebe uma fórmula química e retorna a massa molar
    calcularMassaMolar(formula: string): number {

        // Objeto que funciona como um dicionário/mapa
        // Armazena massas atômicas de alguns elementos
        // Conceito: Estrutura de dados (Map/Dicionário)
        // Tipagem: chave string e valor number
        const massasAtomicas: { [elemento: string]: number } = {
            H: 1,   // Hidrogênio
            C: 12,  // Carbono
            O: 16,  // Oxigênio
            N: 14   // Nitrogênio
        };

        // Variável acumuladora que irá armazenar o resultado final
        // da massa molar da fórmula química
        let massaMolar = 0;

        // Expressão regular (Regex)
        // Serve para separar os elementos químicos da fórmula
        // Exemplo: CO2 -> C e O2
        const regex = /([A-Z][a-z]*)(\d*)/g;

        // Variável que armazenará cada resultado encontrado pela regex
        let match;

        // Loop que percorre todos os elementos encontrados na fórmula
        // Enquanto houver correspondências na regex
        while ((match = regex.exec(formula)) !== null) {

            // match[1] representa o elemento químico encontrado
            // Exemplo: C ou O
            const elemento = match[1];

            // match[2] representa a quantidade do elemento
            // Exemplo: O2 -> quantidade = 2
            // Caso não exista número, assume valor 1
            // Conceito: Operador lógico OR (||)
            const quantidade = parseInt(match[2] || '1');

            // Verifica se o elemento existe no dicionário de massas atômicas
            if (massasAtomicas[elemento]) {

                // Calcula a massa molar
                // massa = massa atômica * quantidade
                massaMolar += massasAtomicas[elemento] * quantidade;

            } else {

                // Caso o elemento não exista no dicionário
                // lança uma exceção
                // Conceito: Tratamento de erro
                throw new Error(`Elemento desconhecido: ${elemento}`);
            }
        }

        // Retorna o valor final da massa molar calculada
        return massaMolar;
    }

    // Método adicional da classe
    // Não está na interface, é uma funcionalidade extra
    calcularEMostrarMassaMolar(formula: string): string {

        // Chamada de outro método da mesma classe
        // Conceito: Reutilização de método
        const massaMolar = this.calcularMassaMolar(formula);

        // Template String do JavaScript/TypeScript
        // Permite inserir variáveis dentro da string
        return `O bioquímico ${this.nome} calculou a massa molar de ${formula} e chegou ao valor de ${massaMolar}.`;
    }
}


// Criação de um objeto da classe Bioquimico
// Conceito: INSTANCIAÇÃO
const bioquimico = new Bioquimico("Vinicius");


// Chamada do método da classe e exibição do resultado no console
// "CO2" é passado como parâmetro para o cálculo da massa molar
console.log(bioquimico.calcularEMostrarMassaMolar("CO2"));