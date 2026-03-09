// Importa o namespace MatematicaBasica do arquivo "operacoesbasicas.js"
// Esse namespace contém funções matemáticas básicas como soma e subtração
import { MatematicaBasica } from './operacoesbasicas.js';

// Importa o namespace MatematicaAvancada do arquivo "operacoesavancadas.js"
// Esse namespace contém funções matemáticas mais avançadas
import { MatematicaAvancada } from './operacoesavancadas.js';

// Chama a função somar que está dentro do namespace MatematicaBasica
// Passa os valores 5 e 3 como parâmetros e exibe o resultado no console
console.log(MatematicaBasica.somar(5, 3)); // 8

// Chama a função subtrair que também pertence ao namespace MatematicaBasica
// Subtrai 3 de 5 e mostra o resultado no console
console.log(MatematicaBasica.subtrair(5, 3)); // 2

// Chama a função exponenciar que está dentro do namespace MatematicaAvancada
// Calcula 2 elevado a 3 e exibe o resultado
console.log(MatematicaAvancada.exponenciar(2, 3)); // 8


