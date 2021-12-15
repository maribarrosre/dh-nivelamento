function maiorQueNum(array, num) {
  let novoA = 0

  for(let i = 0; i < array.length; i++) {
    if(array[i] > num) {
      novoA = novoA + array[i]
      continue
    } 
  }

  return novoA;
}

let numeros = [10, 4, 7, 128, 42, -1, 0, 300, -5]
let num = 5;

let resultado = maiorQueNum(numeros, num);

console.log(resultado)
