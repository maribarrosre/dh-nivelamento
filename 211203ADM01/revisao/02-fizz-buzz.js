/*

    Se o número for múltiplo de 3: deve retornar "Fizz" no lugar do número

    Se o número for múltiplo de 5: deve retornar "Buzz" no lugar do número
    
    Se o número for múltiplo de 3 e 5: deve retornar "FizzBuzz" no lugar do número

*/


// Solução 1
function fizzBuzz(numero) {
    for(let i = 1; i <= numero; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if(i % 3 === 0) {
            console.log("Fizz");
        } else if(i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(20)


// Código Codewars
// Return an array
// function fizzbuzz(n) {
//     const values = [];
//     for(let i = 1; i <= n; i++) {
//       if(i % 3 === 0 && i % 5 === 0) {
//           values.push("FizzBuzz");
//       } else if(i % 3 === 0) {
//           values.push("Fizz");
//       } else if(i % 5 === 0) {
//           values.push("Buzz");
//       } else {
//           values.push(i)
//       }
//     }
//     return values;
//   }
  