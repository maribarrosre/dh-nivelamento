function fatiadorDePaes(pao) {
    let paoFatiado = pao + " fatiado";
  
    return paoFatiado;
  }
  
  
let paoFrances = "Pão Francês";

// fatiadorDePaes(paoFrances)

let paoFrancesFatiado = fatiadorDePaes(paoFrances)

console.log(paoFrancesFatiado)

/*
    Vamos agora comprar uma máquina que passa manteiga nas fatias de pão
*/

// Manual da máquina
function passadorDeManteiga(paoFatiado) {
let paoAmanteigado = paoFatiado + " e amanteigado";

return paoAmanteigado
}

// Armazenando nosso pão amanteigado em uma variável
let paoFrancesAmanteigado = passadorDeManteiga(paoFrancesFatiado)

console.log(paoFrancesAmanteigado)
