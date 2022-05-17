// Exercícios de interpretação de código
// 1) a) ele verifica se o número digitado pelo usuário é divisivel por 2
// b) para números multiplos de 2
// c) para números que não são multiplos de 2
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// 2) a) para mostrar o preço de uma fruta escolhida pelo usuário
// b) será impresso o valor de 2.25
// c) iria mostrar o preço da pêra. // Mostraria o valor do default: 5
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     // break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// 3) pedindo ao usuário para digitar um número
// b) Esse número passou no teste. / Não aparecerá mensagem nenhuma.
// c) não existe a condicional para caso a condição 1 não seja satisfeita
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// } else if(numero <0){
//     console.log("Esse número não passou no teste")
//     // let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem) não existe essa variável mensagem

// Exercícios de escrita de código
// 1) Faça um programa que pergunta ao usuário qual a idade dele 
// e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
// Se sim, imprima no console "Você pode dirigir", caso contrário, imprima "Você não pode dirigir."

// const idade = Number(prompt("Digite a sua idade"))

// const confirmaIdadeDirecao = (number) => {
//     if(number >= 18) {
//         console.log("Você pode dirigir")
//     } else {
//         if(number < 18){
//             console.log("Você não pode dirigir")
//         }
//     }
// }
// confirmaIdadeDirecao(idade)

// 2) Agora faça um programa que verifica que turno do dia um aluno estuda
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno).
// Imprima no console a
//  mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const turnoDeEstudo = prompt("Digite seu turno de estudo: M(matutino), V(vespertino) ou N(noturno")

// const verificaHorarioDeEstudo = (turnoEscolhido) => {
// if (turnoEscolhido === "M"){
//         console.log("Bom dia!")
//     } if (turnoEscolhido === "V"){
//         console.log("Boa tarde!")
//     } else {
//         console.log("Boa noite!")
//     }
// }
// console.log(verificaHorarioDeEstudo(turnoDeEstudo))

// 3)Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const verificaHorarioDeEstudo = (turnoEscolhido) => {
//     switch (turnoEscolhido) {
//         case 'M':
//             console.log("Bom dia!")  
//             break;
    
//         case 'V':
//             console.log("Boa tarde!") 
//             break;

//         case 'N':
//             console.log("Boa noite!") 
//             break;
//         default:
//             return 'esse horário não existe'
//     }
// }
// console.log(verificaHorarioDeEstudo(turnoDeEstudo))

// 4) Considere a situação: você vai ao cinema com um amigo ou amiga, 
// porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia
// e se o ingresso está abaixo de 15 reais
// faça um código que pergunta ao usuário qual o gênero de filme que vão assistir
//  outra pergunta sobre o preço do ingresso
// Caso positivo, 
// imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// const generoDoFilme = prompt("Qual é o gênenro do filme que irá assistir?")
// const precoDoIngresso = Number(prompt("Qual é o valor do ingresso?"))
// const lancheEscolhido = prompt("Qual lanche você vai querer?")

// const filmeQueSeraAssistido = (genero, preco, lanche) => {
//     if (genero === "fantasia" && preco < 15){
//         console.log(`Bom filme! e aproveite seu(sua) ${lanche}`)
//     } else if (genero !== "fantasia" && preco >= 15){
//         console.log("Escolha outro filme!")
//     }
// }

// console.log(filmeQueSeraAssistido(generoDoFilme, precoDoIngresso, lancheEscolhido))

// Desafios
// 1) Modifique o código do exercício 4 de escrita de código para, antes de imprimir
// a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho
// ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" 
// e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

// 2)2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
// Para esta compra, o usuário deve fornecer algumas informações:
    // - Nome completo;
    // - Tipo de jogo: IN indica internacional; e DO indica doméstico;
    // - Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
    // - Categoria: pode ser as opções 1, 2, 3 ou 4;
    // // - Quantidade de ingressos
    // Além disso, ele deve imprimir tudo isso,
    //  junto com o valor de cada ingresso e o valor total que o 
    // usuário tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade)

    // const nome = prompt("Insira seu nome completo")
    // const tipoDeJogo = prompt("Escolha o tipo de jogo: IN (Internacional) ou DO (Doméstico")
    // const etapaDoJogo = promp("Para qual etapa será o jogo? SF(semi-final), DT(decisão de terceiro lugar) ou FI(final)?")
    // const categoriaEscolhida = number(prompt("Escolha uma categoria; 1, 2, 3 ou 4"))
    // const quantidadeDeIngresso = number(prompt("Quantos ingresso?"))

    // const compraRealizada = (cliente, jogo, partida, categoria, valorAPagar) => {
    //     cliente = nome
    // }

//     const compraRealizada = {
//         nome: prompt("Insira seu nome completo"),
//         tipoDeJogo: prompt("Escolha o tipo de jogo: IN (Internacional) ou DO (Doméstico"),
//         etapaDoJogo: prompt("Para qual etapa será o jogo? SF(semi-final), DT(decisão de terceiro lugar) ou FI(final)?"),
//         categoriaEscolhida: Number(prompt("Escolha uma categoria; 1, 2, 3 ou 4")),
//         quantidadeDeIngresso: Number(prompt("Quantos ingresso?")),
//         // valorUnitarioDoIngresso:
//         // valorAPagar:
//     }

//     const retornoUsuario = (cliente, jogo, etapa, categoria, quantidade) => {
       
//         if (jogo === "DO" && categoria === 1 && etapa === "SF"){
//             console.log(quantidade * 1320)
//          } else if (jogo = "IN"){
//                console.log(quantidade * 1320 * 4.10)
//         } else if (jogo === "DO" && categoria === 1 && etapa === "DT"){
//             console.log(quantidade * 660)
//         }else if (jogo = "IN"){
//              console.log(quantidade * 660 * 4.10)
//         } else if (jogo === "DO" && categoria ===1 && etapa === "FI"){
//             console.log(quantidade * 1980)
//         } else if (jogo = "IN"){
//             console.log(quantidade * 1980 * 4.10)
//         } else if (jogo === "DO" && categoria === 2 && etapa === "SF"){
//             console.log(quantidade * 880)
//         } else if (jogo = "IN"){
//             console.log(quantidade * 880 * 4.10)
//         } else if (jogo === "DO" && categoria === 2 && etapa === "DT"){
//             console.log(quantidade * 440)
//         } else if (jogo = "IN"){
//             console.log(quantidade * 440 * 4.10)
//         }else if (jogo === "DO" && categoria === 2 && etapa === "FI"){
//             console.log(quantidade * 1320)
//         } else if (jogo = "IN"){
//             console.log(quantidade * 1320 * 4.10)
//         }else if (jogo === "DO" && categoria === 3 && etapa === "SF"){
//             console.log(quantidade * 550)
//         } else if (jogo = "IN"){
//             console.log(quantidade * 550 * 4.10)
//         } else if (jogo === "DO" && categoria === 3 && etapa === "DT"){
//             console.log(quantidade * 330)
//         } else if (jogo = "IN"){
//             console.log(quantidade * 330 * 4.10)
//         }else if (jogo === "DO" && categoria === 3 && etapa === "FI"){
//             console.log(quantidade * 880)
//         } else if (jogo = "IN"){
//             console.log(quantidade * 880 * 4.10)
//         }else if (jogo === "DO" && categoria === 4 && etapa === "SF"){
//             console.log(quantidade * 220)
//         } else if (jogo = "IN"){
//             console.log(quantidade * 220 * 4.10)
//         } else if (jogo === "DO" && categoria === 4 && etapa === "DT"){
//             console.log(quantidade * 170)
//         } else if (jogo = "IN"){
//             console.log(quantidade * 170 * 4.10)
//         }else if (jogo === "DO" && categoria === 4 && etapa === "FI"){
//             console.log(quantidade * 330)
//         } else if (jogo = "IN"){
//             console.log(quantidade * 330 * 4.10)
//     }
// }
    
        
//         console.log(retornoUsuario(compraRealizada.nome, compraRealizada.tipoDeJogo, compraRealizada.etapaDoJogo, compraRealizada.categoriaEscolhida, compraRealizada.quantidadeDeIngresso))

      
        
const nome = prompt("Insira seu nome completo")
const tipoDeJogo =prompt("Escolha o tipo de jogo: IN (Internacional) ou DO (Doméstico")
const etapaDoJogo =prompt("Para qual etapa será o jogo? SF(semi-final), DT(decisão de terceiro lugar) ou FI(final)?")
const categoriaEscolhida = number(prompt("Escolha uma categoria; 1, 2, 3 ou 4"))
const quantidadeDeIngresso = number(prompt("Quantos ingresso?"))


const compraDoUsuario = (tipo, etapa, categoria, quantidade) => {
    let valorDoIngresso = 0;
    if (etapa === "SF"){
        if (categoria === 1){
            if(tipo === "DO"){
                valorDoIngresso = 1320
            }
            
        }
    }

    if (tipo === "IN" && etapa === "SF" && categoria ===1){
        (valorUnitario = 4.10 * 1320) && valorFinal = quantidade * valorUnitario)
    } else 
    
}