// exercícios de interpretação de código
// 1. a) Matheus Nachtergaele/Virginia Cavendish/Canal Globo as 14h
// 2) a)juca, 3, SRD / Juba, 3, SRD / Jubo, 3, SRD  
// criar um espelho do objeto

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))
// não consegui entender os nomes dados na função porque não entendi o motivo dos nomes

// objeto deve conter nome(string) e apelidos (array com 3 apelidos)
// depois escreva uma função que receba um objeto e imprime a frase
// usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome
// mas como uma nova lista de apelidos. Chame a função chamando o nome objeto

// Exemplo de entrada
// // Exercício 1
// const pessoa = {
//     nome: "Andreza", 
//     apelidos: ["Tetê", "Deza", "Coracao"]
//  }
//     const novoApelido = {
//         apelidos: ["amor", "preta", "princesa"]
//     }
 
//  function objeto () {
//         //  

//         console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
//         console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${novoApelido.apelidos}`)
//  }

//  objeto(pessoa)
//  objeto(novoApelido)
//  // Exemplo de saída
 
// Exercício 2
// Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão

// const people1 = {
//     nome: "Fabiana",
//     idade: 36,
//     profissao: "desempregada"
// }

// const people2 = {
//     nome: "Andreza",
//     idade: 44,
//     profissao: "securitária"
// }

// Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
// // 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

// function pessoas (people1, people2) {
//     return [people1.nome, people2.nome]
// }
// pessoas(people1, people2)
// console.log(people1)

// Crie uma variável de escopo global que guarde um array vazio chamada carrinho

const carrinho = []

// Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: 
// nome (string) e disponibilidade (boolean - devem começar como true)

const fruta1 = {
    nome: "Banana",
    disponibilidade: true
}
const fruta2 = {
    nome: "Maça",
    disponibilidade: true
}
const fruta3 = {
    nome: "Maracujá",
    disponibilidade: true
}
// }
// // Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. 
// // Invoque essa função passando os três objetos criados. 
// function sacolao (fruta){
//     const carrinho = {
//         frutas:["Banana", "Maça", "Maracuja"],
//         disponibilidade: [true, true, true]
//     }
//     console.log(carrinho)
// }
// sacolao(carrinho)

// Desafio
// Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão 
// e depois imprima no console um objeto com essas propriedades. 
// Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

// const dados = {
//     nome: prompt("digite seu nome"),
//     idade: prompt("digite a sua idade"),
//     profissao: prompt("digite sua profissao")
// }
// console.log(dados)
// console.log (`nome: ${dados.nome}, profissão: ${dados.profissao}, idade: ${dados.idade} `)

// Crie uma função que receba dois objetos que representam filmes
// Eles devem ter as propriedades: ano de lançamento e nome.
// O primeiro filme foi lançado antes do segundo? false
// O primeiro filme foi lançado no mesmo ano do segundo? true



// function filmes (obejto, obejto2){
//     const anoLancamento1 = 2000
//     const nome1 = "titanic"
//     const ano_de_lancamento2 = 2005
//     const nome2 = "legalmente loira"
    
//     console.log(`O primeiro filme foi lançado antes do segundo?, ${anoLancamento1 < ano_de_lancamento2}`)

//     console.log(`O primeiro filme foi lançado no mesmo ano do segundo?, ${anoLancamento1 === ano_de_lancamento2}`)
// }
// filmes()

// controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas
// esse mesmo objeto com a propriedade disponibilidade com o valor invertido. 

function sacolao (obj){
    return obj.disponibilidade = !obj.disponibilidade
    

}
sacolao(fruta3)
console.log(fruta3)