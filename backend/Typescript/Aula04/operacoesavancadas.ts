// Exporta o namespace chamado MatematicaAvancada
// Isso permite que esse conjunto de funções seja utilizado em outros arquivos através do import
export namespace MatematicaAvancada {

    // Define e exporta a função exponenciar
    // A função recebe dois parâmetros:
    // base → o número que será elevado
    // expoente → o número que indica a potência
    export function exponenciar(base: number, expoente: number): number {

        // Math.pow é uma função nativa do JavaScript que calcula potência
        // Ela retorna o valor de "base" elevado ao "expoente"
        return Math.pow(base, expoente);
    }

}