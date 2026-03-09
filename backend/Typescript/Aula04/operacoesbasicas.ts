// Exporta o namespace chamado MatematicaBasica
// Isso permite que ele seja utilizado em outros arquivos através do import
export namespace MatematicaBasica {

    // Define e exporta a função somar
    // A função recebe dois números como parâmetros (a e b)
    export function somar(a: number, b: number) {

        // Retorna o resultado da soma entre os dois números
        return a + b;
    }

    // Define e exporta a função subtrair
    // Recebe dois números como parâmetros
    export function subtrair(a: number, b: number) {

        // Retorna o resultado da subtração entre os dois números
        return a - b;
    }
}