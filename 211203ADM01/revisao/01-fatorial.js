function fatorial(numero) {
    let resultado = 1;

    for(let i = 1; i <= numero; i++) {
        resultado = resultado * i
    }

    return resultado;
}

console.log(fatorial(7))

/**
 *  O let resultado precisa ser 1, porque o fatorial de 0 deve retornar 1
 */