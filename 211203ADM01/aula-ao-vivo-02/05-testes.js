
// let livrosSenhorDosAneis = ['Sociedade do anel', 'duas torres']

// let livrosDoHarryPotter = ['pedra filosofal', 'Cálice de fogo', 'retorno do rei']

// let retornoDoRei = livrosDoHarryPotter.pop()

// livrosSenhorDosAneis.push(retornoDoRei)

// console.log(livrosDoHarryPotter)
// console.log(livrosDoHarryPotter)

// let numero = 7;

// for(let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`)
// }



// let alunos = ['Hideki', 'Michelli', 'Dionisio', 'Jonas']
// //               0          1           2          3

// let alunosLength = alunos.length;

// let michelli = alunos[1]
// let dionisio = alunos[2]

// for (let i = 0; i < alunosLength; i++) {
//   alunos--
// }

// console.log(alunos)

// NaN = Not a Number


// console.log(michelli)
// console.log(dionisio)



// console.log(alunosLength)

// var listaDeGanhos = [10, 30, -10, -5, -1, 40];
// var totalNegativos = []; 
// var totalPositivos = []; 


// //seu loop aqui:
// for (let i = 0; i < listaDeGanhos.length; i++) {
//     if(listaDeGanhos[i] < 0) {
//        totalNegativos.push(listaDeGanhos[i])
//     } else {
//       totalPositivos.push(listaDeGanhos[i])
//     }
// }

// console.log(totalNegativos)

// console.log(totalPositivos)

// var listaDeFrutas = [ "Uva", "Banana",  "Manga", "Cajá", "Pinha"]
// //                      0       1           2       3        4

// let indexFrutas = listaDeFrutas.indexOf("Mexerica") // -1

// console.log(indexFrutas)

// var listaDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha"];
// var busca = "Cajá";

// //seu loop aqui
// for(let i = 0; i < listaDeFrutas.length; i++) {
//     if(listaDeFrutas.indexOf(busca) > -1) {
//         console.log("Sim, temos a fruta " + busca + " disponível")
//     }
// }


// ====================================
// var listaDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha"];
// var busca = "Cajá";

// //seu loop aqui
// for(let i = 0; i < listaDeFrutas.length; i++) {
//     if(listaDeFrutas[i] == busca) {
//         console.log("Sim, temos a fruta " + busca + " disponível")
//     } 
// }

// var listaDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha"];
// var busca = "Cajá";

// //seu loop aqui
// for(let i = 0; i < listaDeFrutas.length; i++) {
//     if(listaDeFrutas[i].indexOf(busca) > -1) {
//         console.log("Sim, temos a fruta " + busca + " disponível")
//     } 
// }


// Solução 2
var listaDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha"];
var busca = "Cajá";
//seu loop aqui
for(let i = 0; i < listaDeFrutas.length; i++) {
    if(listaDeFrutas[i].indexOf(busca) > -1) {
        console.log("Sim, temos a fruta " + busca + " disponível")
    }
}