// Define uma interface chamada Carro
// Interfaces em TypeScript servem para definir o "contrato" de propriedades e métodos
interface Carro {
    // Define que qualquer objeto do tipo Carro deve possuir
    // um método chamado acelerar que não recebe parâmetros
    // e retorna uma string
    acelerar: () => string;
}

// Declara uma classe chamada Carro
class Carro {

    // Declara a propriedade pública marca do tipo string
    public marca: string;

    // Declara a propriedade pública modelo do tipo string
    public modelo: string;

    // Método construtor da classe
    // Ele é executado automaticamente quando um objeto da classe é criado
    constructor(marca: string, modelo: string) {

        // Atribui o valor recebido no parâmetro marca
        // para a propriedade marca do objeto atual
        this.marca = marca;

        // Atribui o valor recebido no parâmetro modelo
        // para a propriedade modelo do objeto atual
        this.modelo = modelo;
    }

    // Método da classe responsável por exibir as informações do carro
    exibirInfo() {

        // Retorna uma string com a marca e o modelo do carro
        // usando template string
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }

}

// Aqui estamos adicionando um método chamado acelerar
// diretamente no prototype da classe Carro
// Isso faz com que todas as instâncias da classe tenham acesso a esse método
Carro.prototype.acelerar = function () {

    // Retorna uma mensagem informando que o carro está acelerando
    // usando o modelo do carro atual (this.modelo)
    return `O ${this.modelo} esta acelerando! `;
}

// Cria uma nova instância (objeto) da classe Carro
// passando "Toyota" como marca e "Corolla" como modelo
let meuCarro = new Carro("Toyota", "Corolla");

// Exibe no console as informações do carro
// chamando o método exibirInfo()
console.log(meuCarro.exibirInfo());

// Exibe no console a mensagem do método acelerar
console.log(meuCarro.acelerar());