// Declaração da classe chamada Livro
class Livro{

// Declaração da propriedade titulo do tipo string
titulo: string;

// Declaração da propriedade anoPublicação do tipo number
anoPublicação: number;

// Método construtor da classe, executado quando um novo objeto é criado
constructor(titulo: string, anoPublicação: number){

    // Atribui o valor recebido no parâmetro titulo à propriedade titulo do objeto
    this.titulo = titulo;

    // Atribui o valor recebido no parâmetro anoPublicação à propriedade anoPublicação do objeto
    this.anoPublicação = anoPublicação;
}

// Método da classe responsável por exibir os detalhes do livro
exibirDetalhes(){

    // Exibe no console uma mensagem com o título e o ano de publicação do livro
    console.log(`Livro: ${this.titulo}, publicado em ${this.anoPublicação}.`);
}
}

// Criação de um novo objeto da classe Livro com título e ano de publicação
const livroFavorito = new Livro ("O Nome do vento",2007);

// Chamada do método exibirDetalhes para mostrar as informações do livro no console
livroFavorito.exibirDetalhes();