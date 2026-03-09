interface Carro {
    acelerar: () => string;
}

class Carro {
    public marca: string;
    public modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }
    exibirInfo() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }

}

Carro.prototype.acelerar = function () {
    return `O ${this.modelo} esta acelerando! `;
}

let meuCarro = new Carro("Toyota", "Corolla");
console.log(meuCarro.exibirInfo());
console.log(meuCarro.acelerar());