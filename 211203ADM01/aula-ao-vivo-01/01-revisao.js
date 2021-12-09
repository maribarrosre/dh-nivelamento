// Variáveis

// Ao usar variáveis podemos manipular nossos dados de uma forma mais segura e organizada.
let domPedro = "Pedro de Alcântara Francisco Antônio João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon"

console.log(domPedro);

// Podemos armazenar diversos tipos de dados nas variáveis, por exemplo: 
let varString = "dari";
let varNumber = 50;
let varFloat = 13.5;
let varArray = [1, 2, 3];
let varBoolean = true;

// typeof - retorna o tipo de dado
let caixaDePandora = 50

console.log(typeof caixaDePandora) // output: number

// OPERADORES ARITMÉTICOS

// Adição + 
let a = 10 + 5;
console.log(a);

// Subtração de
let b = 10 - 5;
console.log(b);

// Divisão
let c = 10 / 5;
console.log(c);

// Multiplicação
let d = 10 * 5;
console.log(d);

// Módulo => Guarde no ❤️ 
// https://brasilescola.uol.com.br/matematica/o-resto-divisao.htm
 
// Descobrir se um número é divisível por outro.
// https://matematicabasica.net/criterios-de-divisibilidade/
let e = 10 % 5;
console.log(e); // Se o resto dessa divisão for igual a 0

// Identificar um número par ou ímpar
// https://mundoeducacao.uol.com.br/matematica/como-identificar-se-um-numero-par-ou-impar.htm

let numeroPar = 10 % 2;
console.log(numeroPar); // Se resto da divisão for igual a 0

// ordem de precedência
// exmplo 1
let valor1 = 10 + 2 * 5
console.log(valor1); // 20

// Alterando a ordem de precedência
let valor2 = (10 + 2) * 5
console.log(valor2) // 60

// ⚠️ Divisão, multiplicação e módulo têm prioridade em relaçao à subtração e à adição. ⚠️

// ⚠️ Se mesma prioridade, calcula-se a partir da esquerda
let exemploPrioridade = 10 / 5 * 6
console.log(exemploPrioridade); // 12

// OPERADORES RELACIONAIS OU DE COMPARAÇÃO
let numero = 42
let numeroString = "42"

console.log(typeof numero) // number
console.log(typeof numeroString) // string

// Compara apenas o valor
let comparacao = numero == numeroString; // true

// Compara o valor e tipo de dado (Operador estritamente igual)
let comparacao2 = numero === numeroString; // false

console.log(comparacao);

console.log(comparacao2);

// Condicional IF
let numeroTeste = 50;

if (numeroTeste >= 50) {
    console.log("É maior ou igual")
}

// Outra forma de pensarmos o código acima:
/* 
    >=  maior ou igual
        maior || igual 

*/

// 50 é maior que 50? Falso, pois 50 é igual a 50;
if (numeroTeste > 50 || numeroTeste == 50) {
    console.log("É maior ou igual")
}

// ELSE IF

// Exemplo 1

// let notaDoAluno = 8 // Aluno aprovado com mérito
// let notaDoAluno = 6 // Aluno aprovado 
// let notaDoAluno = 4 // Aluno reprovado

// if (notaDoAluno >= 7) {
//     console.log("Aluno aprovado com mérito!")
// } else if (notaDoAluno >= 5) {
//     console.log("Aluno aprovado.");
// } else {
//     console.log("Aluno reprovado!");
// }

// Exemplo 2 - ⚠️ Cuidado com a ordem lógica ⚠️ - Código com erro na sequência lógica ⚠️

let notaDoAluno = 6 
// let notaDoAluno = 8 
// let notaDoAluno = 4 

/**
 *  Caso a nota do aluno seja 6, por exemplo o código funcionará bem, porque 6 é maior ou igual a 5, conforme nossa condição
 *  que vem no primeiro if (notaDoAluno >= 5).
 * 
 *  Já ao testarmos com um valor 8, por exemplo, irá gerar um resultado inesperado. Como saída teremos "Aluno aprovado.",mas
 *  seguindo nossa lógica deveria imprimir "Aluno aprovado com mérito!". E onde está nosso erro?
 * 
 *  O erro está justamente na sequência lógica que escolhemos. Voltando ao exemplo, teremos que 8 é maior ou igual a 5, portanto irá
 *  entrar no primeiro if, mas não chegará a ser validado no else if (notaDoAluno >= 7) que, de fato, imprimiria o retorno esperado. 
 * 
 *  Atentem-se ao enunciado e, principalmente, à sequência lógica.  
 * 
 */

if (notaDoAluno >= 5) {
    console.log("Aluno aprovado.");
} else if (notaDoAluno >= 7) {
    console.log("Aluno aprovado com mérito!");
} else {
    console.log("Aluno reprovado!")
}

// FUNÇÕES
let trabalhoDeHistoria = 8.0
let trabalhoDeMatematica = 7.0
let trabalhoDeCiencia = 10
let trabalhoDeGeografia = 9.5

function obterMedia(nota1, nota2, nota3, nota4) {
  let quantidadeDeTrabalhos = 4
  let somaValores = nota1 + nota2 + nota3 + nota4
  let media = somaValores / quantidadeDeTrabalhos

  return media
}

console.log(obterMedia(trabalhoDeHistoria, trabalhoDeMatematica, trabalhoDeCiencia, trabalhoDeGeografia))

// Máquina de cortar pães 🍞 🥖
function cortadorDePaes(pao) {
  let paoCortado = pao + " cortado"

  return paoCortado
}

let paoFrances = "Pão Francês"

let embalagemPao = cortadorDePaes(paoFrances)

console.log(embalagemPao) // Pão Francês cortado