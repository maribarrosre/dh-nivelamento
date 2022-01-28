// Revisão

// /*
//     Fluxo da função

//     Entrada: pão
//     Processamento: Fatiar o pão
//     Saída: pão fatiado
// */

// // Manual 
// // function fatiadorDePaes(pao) {
// //     let paoFatiado = pao + " fatiado";

// //     return paoFatiado;
// // }

// // // Teste
// // let paoFrances = "Pão Francês"
// // let paoItaliano = "Pão Italiano"

// // console.log(fatiadorDePaes(paoFrances))

// // console.log(fatiadorDePaes(paoItaliano))

// // Manual
// // function tabuada() {

// // }

// // 5 x 1 = 5
// // 5 x 2 = 10

// function tabuada(numero) {
//     for(let i = 1; i <= 10; i++) {
//         console.log(numero + " x " + i + " = " + numero * i) 
//     }
// }

// tabuada(3)
// tabuada(5)
// tabuada(7)



// // // for(let i = 1; i <= 10; i++) {
// // //     console.log(7 + " x " + i + " = " + 7 * i) 
// // // }

// // // for(let i = 1; i <= 10; i++) {
// // //     console.log(3 + " x " + i + " = " + 3 * i) 
// // // }

// // let alunos = ['Goku', 'Vegeta', 'Trunks', 'Kame']

// // console.log(alunos)
// // // console.log(alunos[2])
// // // console.log(alunos[1])

// // // array[indice]
// // // alunos[1] Vegeta

// // for(let indice = 0; indice < alunos.length; indice++) {
// //     console.log(alunos[indice])
// // }

// let numeros = [2, 10, 7, 9, 25, 11]
// // índice      0   1  2  3   4

// // array[indice] 
// // numeros[3] // 9

// // console.log(numeros)

// let numerosImpares = []
// let numerosPares = []

// for(let indice = 0; indice < numeros.length; indice++) {
//    if(numeros[indice] % 2 != 0) {
//         numerosImpares.push(numeros[indice]);
//    } else {
//         numerosPares.push(numeros[indice]);
//    }
// }

// // console.log(numerosImpares);
// // console.log(numerosPares);

// function multiNumeros(array, numero) {
//     let novoArray = []
//     for(let indice = 0; indice < array.length; indice++) {
//         novoArray.push(array[indice] * numero);
//     }


//     return novoArray;
// }

// // NaN - Not a Number

// let arrayTeste = [5, 9, 12]

// console.log(multiNumeros(arrayTeste, 5))


/*
  Criem uma função chamada fizzBuzz, que recebe como parâmetro um número e imprime as seguintes
  mensagens de acordo com cada caso:

  * Se o número for múltiplo de 3: deve imprimir "Fizz" no lugar do número

  * Se o número for múltiplo de 5: deve imprimir "Buzz" no lugar do número
      
  * Se o número for múltiplo de 3 e 5: deve imprimir "FizzBuzz" no lugar do número

  * Caso contrário, deve imprimir somente o número 

*/

// Manual
function fizzBuzz(numero) {
    for(let i = 1; i <= numero; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz')
        } else if(i % 3 == 0) {
            console.log('Fizz')
        } else if(i % 5 == 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }

    }
}

fizzBuzz(30)

// Resultado esperado :

// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
