// Variáveis
// let nomeAluna = "Gabi";

// // Imprime um valor no nosso console
// console.log(nomeAluna)

// nomeAluna = "Gabriela";

// console.log(nomeAluna)

// // Operadores 
// let numeroA = 5;
// let numeroB = 10;

// let resultado = numeroA * numeroB;

// console.log(resultado)

// Módulo
// let numeroA = 11;

// // Condicionais
// if (numeroA % 2 != 0) {
//   console.log("Ímpar")
// } else {
//   console.log("Par")
// }

// let numeroA = 50;

// if(numeroA >= 50) {
//   console.log("sou maior ou igual")
// } else {
//   console.log("Sou menor")
// }

// let numeroA = "42";
// let numeroB = 42;

// console.log(typeof numeroA)
// console.log(typeof numeroB)


// if(numeroA === numeroB) {
//   console.log(true)
// } else {
//   console.log(false)
// }

// else if 
// let media = 9;

// if (media >= 7) {
//   console.log("Aluno aprovado com mérito!")
// } else if(media >= 5) {
//   console.log("Aluno aprovado!")
// } else {
//   console.log("Reprovado!")
// }


// Código com erro na sequência lógica
// if (media >= 5) {
//   console.log("Aluno aprovado!")
// } else if(media >= 7) {
//   console.log("Aluno aprovado com mérito!")
// } else {
//   console.log("Reprovado!")
// }

// Arrays
// let alunos = ['Gabi', 'Dari', 'Lari'] // 3
// // // índice       0        1       2 

// let aluno = alunos[1]

// let resultado = alunos.indexOf('Lari') // -1

// console.log(resultado)

// For Loops
// for(let i = 1; i <= 10; i++) {
//     // console.log("7 x " + i + " = " + 7 * i)
//     console.log(`7 x ${i} = ${7 * i}`) // interpolação
// }

// 7 x 1 = 7
// 7 x 2 = 14

// let nome = "Gabi";
// let sobrenome = "Villacorta";
// let profissao = "Programadora";
// // let cartaoDeVisitas = nome + " " + sobrenome + " - " + profissao;

// let cartaoDeVisitas = `${nome} ${sobrenome} - ${profissao}`;

// console.log(cartaoDeVisitas)

// For loop com array
let frutas = ['banana', 'morango', 'laranja', 'uva'];
// índice        0         1            2       3

let tamanhoArray = frutas.length; // 4

// console.log(tamanhoArray);


for(let indice = 0; indice < tamanhoArray; indice++) {
    console.log(frutas[indice]);
}
