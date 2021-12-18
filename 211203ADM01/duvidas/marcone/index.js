// let alunos = ['Marcone', 'Dari', 'Pedro', 'João']; // 4
// // índice        0          1        2       3

// // let tamanhoArray = alunos.length;

// // console.log(tamanhoArray)

// let saudacao = "Bom dia, "

// for(let indice = 0; indice < alunos.length; indice++) {
//   console.log(saudacao + alunos[indice])
// }


let numeros = [10, 5, 8, 9, 4, 6, 7, 11]; // 6

let numerosPares = []
let numeroImpares = []

for(let indice = 0; indice < numeros.length; indice++) {
  if(numeros[indice] % 2 == 0) {
    numerosPares.push(numeros[indice])
  } else {
    numeroImpares.push(numeros[indice])
  }
}

console.log(numerosPares)
console.log(numeroImpares)



// Descubrir se um número é par ou ímpar
// Um número é par se o resto da divisão por 2 for igual a zero 0;

// let numeroA = 10;
// let numeroB = 11;

// if(numeroB % 2 == 0) {
//   console.log("Número é par")
// } else {
//   console.log("Número é ímpar")
// }