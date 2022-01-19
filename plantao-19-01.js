/*
  Manual 

  Entrada: pão
  Processamento: fatiar pão
  Saída: pão fatiado

*/

function fatiadorDePaes(pao) {
  let paoFatiado = pao + " " + manteiga

  return paoFatiado
}

// // 
// let paoFrances = "Pão Francês";
// let paoItaliano = "Pão Italiano";

// // let paoFrancesFatiado = fatiadorDePaes(paoFrances)

// let paoItalianoFatiado = fatiadorDePaes(paoItaliano)

// console.log(paoFrancesFatiado)
// console.log(paoItalianoFatiado)


// manual
// function multiplicarPorDez(numero) {
//   let multiplica = numero * 10

//   return multiplica
// }

// let resultado = multiplicarPorDez(7)

// console.log(resultado)

// var itens =["farinha",'ovo'] 

function agregandoSabor(itens, novosItens){ 
  itens.push(novosItens) 

  return itens 
} 
  
console.log(agregandoSabor(itens,"Leite")) 
console.log(agregandoSabor(itens,"Chocolate")) 
console.log(agregandoSabor(itens,"Cacau")) 


let harryPotter = ['Cálice de Fogo', 'Pedra Filosofal', 'O retorno do rei']
let senhorDosAneis = ['A sociedade do anel', 'As duas torres']

let retornoDoRei = harryPotter.pop()

senhorDosAneis.push(retornoDoRei)

console.log(harryPotter)

console.log(senhorDosAneis)
