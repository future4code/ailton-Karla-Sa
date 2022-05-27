/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de Blackjack!")


    if(confirm("Quer iniciar uma nova rodada?")) {
      // o que fazer se o usuário clicar "ok"
      
   } else {
      console.log("O jogo acabou")
      // o que fazer se o usuário clicar "cancelar"
   }

   const cartaNipes = ["♦️", "♥️", "♣️", "♠️"];
   const valores = ['A','2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

   const sorteio = cartaNipes[Math.floor(Math.random() * 4)];
   const sorteioValores = valores[Math.floor(Math.random() * valores.length)];
   const sorteioPc = cartaNipes[Math.floor(Math.random() * 4)];
   const sorteioValoresPc = valores[Math.floor(Math.random() * valores.length)];
   // const cartas = sorteio && sorteioValores
   // console.log( sorteio + sorteioValores)

   let cartasJogador = [];
   let cartasComputador = [];
 
   console.log(`Usuário - cartas ${sorteio} - pontuação ${sorteioValores}`)
   console.log (`PC - cartas ${sorteioPc} - pontuação ${sorteioValoresPc}`)

   if (sorteioValores === sorteioValoresPc){
      console.log("Empate!")
   } if (sorteioValores > sorteioValoresPc) {
      console.log("O usuário ganhou!")
   } else{
      console.log("O PC ganhou!")
   }
   

//    const carta = comprarCarta(); 
// // Sorteia uma carta. Por exemplo, o rei de ouros

// console.log(carta.texto) 
// // imprime o texto da carta. Nesse caso: "K♦️"

// console.log(carta.valor) 
// // imprime o valor da carta (um número). Nesse caso: 10)