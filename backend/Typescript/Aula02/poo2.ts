class Animal{

    // ENCAPSULAMENTO
    // O atributo é privado, ou seja, só pode ser acessado dentro da própria classe.
    // Isso protege os dados do objeto.
    private especie: string;

    constructor(especie:string){
        this.especie = especie;
    }

    // ENCAPSULAMENTO
    // Método público que permite acessar o valor da variável privada.
    // Ele controla como o dado é acessado fora da classe.
    getEspecie():string{
        return this.especie;
    }

    fazerSom(){
        console.log("O animal faz um som.");
    }
}

// HERANÇA
// A classe Cachorro herda características e métodos da classe Animal
class Cachorro extends Animal {

    // POLIMORFISMO
    // O método fazerSom é sobrescrito para ter um comportamento diferente
    fazerSom(){
        console.log("O cachorro late.");
    }
}

// HERANÇA
// A classe Gato também herda da classe Animal
class Gato extends Animal {

    // POLIMORFISMO
    // Mesmo método da classe pai, mas com comportamento diferente
    fazerSom(){
        console.log("O gato mia.");
    }
}

// POLIMORFISMO
// A variável é do tipo Animal, mas recebe um objeto Cachorro.
// Isso permite que diferentes classes filhas sejam tratadas como Animal.
const meuAnimal: Animal = new Cachorro("Cachorro");

// Aqui será executado o método da classe Cachorro
meuAnimal.fazerSom();