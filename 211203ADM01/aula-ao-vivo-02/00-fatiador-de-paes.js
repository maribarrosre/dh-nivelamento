/*
  Vamos entender essa primeira parte como um manual técnico que explica o
  funcionamento da nossa máquina.
*/
function fatiadorDePaes(pao) {
    let paoFatiado = pao + " fatiado";
  
    return paoFatiado;
  }
  
  
  /*
    Agora que lemos o nosso manual, sabemos que a máquina recebe um pão e
    devolve (retorna) nosso pão fatiado. Vamos usá-la.
  */
  
  // Seleciono o tipo de pão que quero fatiar
  let paoFrances = "Pão Francês";
  
  
  // Usando nossa máquina
  fatiadorDePaes(paoFrances)
  
  // Armazenando nosso pão fatiado em uma variável
  let paoFrancesFatiado = fatiadorDePaes(paoFrances)
  
  // Printar o conteúdo da nossa variável
  console.log(paoFrancesFatiado)
  
  /* 
    Suponhamos que usei a máquina ontem para fatiar Pão Francês, mas hoje
    quero comer uma Pão Italiano. Basta eu colocar o Pão Italiano na máquina e o
    funcionamento será o mesmo.
  */
  
  let paoItaliano = "Pão Italiano";
  
  let paoItalianoFatiado = fatiadorDePaes(paoItaliano)
  
  console.log(paoItalianoFatiado)
