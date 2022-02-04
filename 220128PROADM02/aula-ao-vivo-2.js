// function agregandoSabor(array, novoItem) {
//     array.push(novoItem)
//     return array
// }


// // Teste
// let lista = ['Farinha', 'Ovo', 'Cacau']
// let item = 'Leite'

// console.log(agregandoSabor(lista, item))
// console.log(agregandoSabor(lista, 'arroz'))

// let livrosHarryPotter = ['A Pedra Filosofal', 'Cálice de Fogo', ' O Retorno do Rei']
// let livrosSenhorDoAneis = ['A Sociedade do Anel', 'As Duas Torres']

// // console.log(livrosHarryPotter);

// let retornoDoRei = livrosHarryPotter.pop()

// livrosSenhorDoAneis.push(retornoDoRei)

// console.log(livrosHarryPotter);
// console.log(livrosSenhorDoAneis);

let nomes = ['Dari', 'Diogo', 'Sergio', 'Gustavo']; // 4
// índice      0        1        2          3


// array[índice]

// console.log(nomes);
// console.log(nomes.length);

// console.log(nomes[0]);
// console.log(nomes[2]);


// for(variável; condição; incremento) {

// }

// let numero = 7;

// 5 x 1 = 5
// 5 x 2 = 10

// function tabuada(numero) {
//     for(var i = 1; i < 11; i++) {
//         console.log(numero + " x " + i + " = " + numero * i)
//     }
// }

// tabuada(5); 

// let listaDeAlunos = ['Adriana', 'Diogo', 'Evelin', 'Dari', 'Felipe', 'Sergio']; // 6
// // índice                0         1        2         3       4          5

// // array[índice]
// listaDeAlunos[2] // Evelin
// listaDeAlunos[1] // Diogo

// // console.log(listaDeAlunos)
// // console.log(listaDeAlunos.length)

// for(let indice = 0; indice < listaDeAlunos.length; indice++) {
//     console.log(listaDeAlunos[4])
// }


// for (let i = 1; i <= 12 ; i++){ 
//     if(i % 2 == 0){ 
//         console.log(i + " + " + i + " = " + (i + i))
// } } 

// function osPares(limitador) {
//     for(let i = 1; i <= limitador; i++) {
//         if(i % 2 == 0) {
//             console.log("O numero " + i + " é par")
//         } else {
//             console.log("O numero " + i + " é ímpar")
//         }
//     }
// }

// osPares(15)

function somaDosPares(numero) {
    let somaNumerosPares = 0;

    for(let i = 1; i <= numero; i++) {
        if(i % 2 == 0) {
            somaNumerosPares = somaNumerosPares + i
        }
        
    }
    
    return somaNumerosPares;
}



console.log(somaDosPares(6))
// // 0 + 2 + 4 + 6

// let valor1 = 10;

// let valor2 = 20;

// valor1 = valor1 + valor2 // 30

// // console.log(valor1 + valor2);
