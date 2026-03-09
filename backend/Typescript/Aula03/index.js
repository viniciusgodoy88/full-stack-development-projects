var Bioquimico = /** @class */ (function () {
    function Bioquimico(nome) {
        this.nome = nome;
    }
    Bioquimico.prototype.calcularMassaMolar = function (formula) {
        var massasAtomicas = {
            H: 1, // Hidrogênio
            C: 12, // Carbono
            O: 16, // Oxigênio
            N: 14 // Nitrogênio
        };
        var massaMolar = 0;
        var regex = /([A-Z][a-z]*)(\d*)/g;
        var match;
        while ((match = regex.exec(formula)) !== null) {
            var elemento = match[1];
            var quantidade = parseInt(match[2] || '1');
            if (massasAtomicas[elemento]) {
                massaMolar += massasAtomicas[elemento] * quantidade;
            }
            else {
                throw new Error("Elemento desconhecido: ".concat(elemento));
            }
        }
        return massaMolar;
    };
    Bioquimico.prototype.calcularEMostrarMassaMolar = function (formula) {
        var massaMolar = this.calcularMassaMolar(formula);
        return "O bioqu\u00EDmico ".concat(this.nome, " calculou a massa molar de ").concat(formula, " e chegou ao valor de ").concat(massaMolar, ".");
    };
    return Bioquimico;
}());
var bioquimico = new Bioquimico("Maria");
console.log(bioquimico.calcularEMostrarMassaMolar("H2O"));
