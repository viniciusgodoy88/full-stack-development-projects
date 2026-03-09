"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatematicaBasica = void 0;
// Exporta o namespace para que possa ser importado em outros arquivos
var MatematicaBasica;
(function (MatematicaBasica) {
    function somar(a, b) {
        return a + b;
    }
    MatematicaBasica.somar = somar;
    function subtrair(a, b) {
        return a - b;
    }
    MatematicaBasica.subtrair = subtrair;
})(MatematicaBasica || (exports.MatematicaBasica = MatematicaBasica = {}));
