class Livro{
titulo: string;
anoPublicação: number;

constructor(titulo: string, anoPublicação: number){
    this.titulo = titulo;
    this.anoPublicação = anoPublicação;
}
exibirDetalhes(){
    console.log(`Livro: ${this.titulo}, publicado em ${this.anoPublicação}.`);
}
}

const livroFavorito = new Livro ("O Nome do vento",2007);
livroFavorito.exibirDetalhes();