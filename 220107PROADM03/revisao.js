//  /*
//   1 - Criar uma função chamada buscarMaiorNumero que recebe como parâmetro um array de números e
//   retorna o maior número desse array.
//  */

// function buscarMaiorNumero(array) {
//   let maiorNumero = 0;
//   for(let i = 0; i < array.length; i++) {
//     if(maiorNumero < array[i]) {
//       maiorNumero = array[i]
//     }
//   }

//   return maiorNumero;
// }

// let numeros = [2, 100, 7, 90, 700, 20005, 45000, 1001];

// let resultado = buscarMaiorNumero(numeros)

// console.log(resultado)

// // let guerreirosZ = ['Goku', 'Vegeta', 'Kuririn', 'Trunks'] // 4
// // // índice            0        1          2          3

// // for(let i = 4; i < guerreirosZ.length; i++) {
// //   console.log(guerreirosZ[i])
// // }

// // /*
// //   i = 0
// //   i = 1 
// //   i = 2
// //   i = 3 
// //   i = 4 
// //   i = 5
// // */

/*
    Crie uma função que receba um número como parâmetro e imprima as seguintes enunciados:
    
    1 - Se o número for múltiplo de 3: deve imprimir "Fizz" no lugar do número

    2 - Caso contrário, se o número for múltiplo de 5: deve imprimir "Buzz" no lugar do número
    
    3 - Caso contrário, se o número for múltiplo de 3 e 5: deve imprimir "FizzBuzz" no lugar do número

    4 - Caso contrário de imprimir somente o número

*/

function fizzBuzz(numero) {
  for(let i = 1; i <= numero; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
      console.log('FizzBuzz')
    } else if (i % 3 == 0) {
      console.log('Fizz')
    } else if (i % 5 == 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

// Módulo %

fizzBuzz(20) 


// Resultado Esperado: 

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





// Função tabuada
// 5 x 1 = 5
// 5 x 2 = 10

// function tabuada(numero) {
//   for(let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`)
//   }
// }

// tabuada(100)
