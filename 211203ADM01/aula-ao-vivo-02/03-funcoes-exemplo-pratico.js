function obterMedia(nota1, nota2, nota3, nota4) {
    let quantidadeDeProvas = 4;
    let somaValores = nota1 + nota2 + nota3 + nota4;
    let media = somaValores / quantidadeDeProvas;
  
    return media
}
  
  // let provaDeHistoria = 
  // let provaDeMatematica = 
  // let provaDeCiencia = 
  // let provaDeGeografia = 
  
let mediaNotasProvas = obterMedia(9, 5, 8, 7);
  
console.log("Média:",mediaNotasProvas)
  
/*
    Iremos criar uma função que recebe as médias das provas e retorna as seguintes mensagens para cada caso:

    1-Se a média for maior ou igual a 7, deve retornar "Aluno aprovado com mérito!";

    2-Caso contrário, se a média for maior ou igual a 5, deve retornar "Aluno aprovado!"

    3-Caso contrário, deve retornar "Aluno reprovado!"
*/
  
function mostrarAprovacao(media) {
    if(media >= 7) {
        return "Aluno aprovado com mérito!";
    } else if (media >= 5) {
        return "Aluno aprovado!";
    } else {
        return "Aluno reprovado!";
    }
}
  
let menssagem = mostrarAprovacao(mediaNotasProvas);

console.log(menssagem)

/* 
    let mediaNotasProvas = obterMedia(5, 5, 8, 7); 
    obterMedia(5, 5, 0, 7); 
    obterMedia(9, 5, 8, 7);

*/    

// CÓDIGO COM ERRO NA SEQUÊNCIA LÓGICA
// function mostrarAprovacao(media) {
//   if(media >= 5) {
//     return "Aluno aprovado!";
//   } else if (media >= 7) {
//     return "Aluno aprovado com mérito!";
//   } else {
//     return "Aluno reprovado!";
//   }
// }

// let menssagem = mostrarAprovacao(mediaNotasProvas);

// console.log(menssagem)