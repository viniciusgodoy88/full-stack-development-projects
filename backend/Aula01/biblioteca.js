var Livro = /** @class */ (function () {
    function Livro(titulo, anoPublicação) {
        this.titulo = titulo;
        this.anoPublicação = anoPublicação;
    }
    Livro.prototype.exibirDetalhes = function () {
        console.log("Livro: ".concat(this.titulo, ", publicado em ").concat(this.anoPublicação, "."));
    };
    return Livro;
}());
var livroFavorito = new Livro("O Nome do vento", 2007);
livroFavorito.exibirDetalhes();
