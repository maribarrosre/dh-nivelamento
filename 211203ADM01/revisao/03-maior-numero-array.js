const numeros = [2, 100, 7, 90, 700, 25, 45, 1001]

function buscarMaiorNumero(numeros) {
    let resultado = 0;
    for(let i = 0; i < numeros.length; i++) {
        if(resultado < numeros[i]) {
            resultado = numeros[i];
        }
    }

    return resultado;
}

console.log(buscarMaiorNumero(numeros))