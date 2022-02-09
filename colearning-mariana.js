// Etapa 1 - Declaro (crio) a minha função
function menorValor(numeroA, numeroB) {
    if(numeroA < numeroB) {
        return numeroA
    } else {
        return numeroB
    }
}

// Etapa 2 - Invocar (Chamar) minha função
menorValor(8, 10)

// Etapa 3 - Imprimir o valor para teste
console.log(menorValor(8, 10))

/*
    7 x 1 = 7
    7 x 2 = 14
    7 x 3 = 21
*/

// Teoria
function tabuada(numero) {
    // Percorre os elementos do array
    for(let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + (numero * i))
    }
}

// Prática
tabuada(3)
tabuada(5)
tabuada(7)

function filtrarPares(array) {
    // Percorre os elementos do array
    for(let indice = 0; indice < array.length; indice++) {
        // Cria uma condição para cada elemento
        // Nesse caso, se forem par, imprima os pares
        if(array[indice] % 2 == 0) {
            console.log(array[indice])
        }
    }
}

let arrayTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9]

filtrarPares(arrayTeste)



function filtrarPares(array) {
    let valoresPares = []
    let valoresImpares = []

    // Percorre os elementos do array
    for(let indice = 0; indice < array.length; indice++) {
        // Se os elementos forem par, armazene dentro do array valoresPares
        if(array[indice] % 2 == 0) {
            valoresPares.push(array[indice])

        // Caso contrário, armazene no array valoresImpares
        } else {
            valoresImpares.push(array[indice])
        }
    }

    console.log(valoresPares)
    console.log(valoresImpares)
}

let arrayTeste = [1, 2, 3, 4, 5, 6, 7, 8, 9]

filtrarPares(arrayTeste)

