function fatiadorDePaes(pao) {
    let paoFatiado = pao + " fatiado";
  
    return paoFatiado;
}
  
function fatiadorEPassadorDeManteigaPaes(pao) {
    let paoFatiado = fatiadorDePaes(pao);

    let paoAmanteigado = paoFatiado + " e amanteigado";

    return paoAmanteigado
}

let paoFrances = "Pão Francês";

let paoFrancesFatiadoEAmanteigado = fatiadorEPassadorDeManteigaPaes(paoFrances);

console.log(paoFrancesFatiadoEAmanteigado)