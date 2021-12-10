function obterMedia(nota1, nota2, nota3, nota4) {
    let quantidadeDeProvas = 4;
    let somaValores = nota1 + nota2 + nota3 + nota4;
    let media = somaValores / quantidadeDeProvas;
  
    return media
  }
  
  let provaDeHistoria = 5
  let provaDeMatematica = 9
  let provaDeCiencia = 8
  let provaDeGeografia = 7
  
  let mediaNotasProvas = obterMedia(provaDeHistoria, provaDeMatematica, provaDeCiencia, provaDeGeografia);
  
  console.log("Média:",mediaNotasProvas)
  
  /**
   *  Iremos criar uma função que recebe as médias das provas e retorna as seguintes mensagens para cada caso :
   * 
   * 1 - Se a média do aluno for maior ou igual a 7, deve retornar "Aluno aprovado com mérito!"
   * 
   * 2 - Caso contrário, se a média do aluno for igual ou maior que 5, deve retornar "Aluno aprovado"
   * 
   * 3 - Caso contrário, deve retornar "Aluno reprovado"
   * 
   */
  
  function mostrarAprovacao(media) {
    if(media >= 7) {
      return "Aluno aprovado com mérito"
    } else if(media >= 5) {
      return "Aluno aprovado"
    } else {
      return "Aluno reprovado"
    }
  }
  
  let menssagem = mostrarAprovacao(mediaNotasProvas);
  
  console.log(menssagem)
  
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
  