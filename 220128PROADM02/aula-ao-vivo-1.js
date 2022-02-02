function obterMedia(nota1, nota2, nota3, nota4) {
  let quantidadesProvas = 4;
  let somaValores = nota1 + nota2 + nota3 + nota4;
  let media = somaValores / quantidadesProvas

  return media
}

let p1 = 8
let p2 = 7
let p3 = 0
let p4 = 0

let resultadoMedia = obterMedia(p1 ,p2, p3, p4)

console.log(resultadoMedia)

function mostrarAprovacao(media) {
  if(media >= 7) {
    return "Aluno aprovado com mérito"
  } else if (media >= 5) {
    return "Aluno Aprovado"
  } else {
    return "Aluno Reprovado"
  }
}

let mensagem = mostrarAprovacao(resultadoMedia)

console.log(mensagem)
