// Exercícios de Leitura de código
// let array
// console.log('a. ', array) undefined

// array = null
// console.log('b. ', array) null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
// console.log('c. ', array.length) 11

// let i = 0
// console.log('d. ', array[i]) 3

// // array[i+1] = 19
// // console.log('e. ', array)  [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor) 9

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// SUBI NUM ONIBUS EM MIRROCOS 27

// pergunte ao usuário seu nome e seu e-mail
// const nomeDoUsuario = prompt("Qual é o seu nome?")
// const seuEmail = prompt("Digite seu e-mail")
// // O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!
// const frase = `O e-mail ${nomeDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${seuEmail}`
// console.log(frase)

// // Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável

const listaComidasPreferidas = [
    "Macarrão", 
    "Arrroz", 
    "Comida Japonesa", 
    "Pizza", 
    "Peixe"
]
console.log(listaComidasPreferidas)

console.log("Essas são as minhas comidas preferidas:")
console.log(listaComidasPreferidas[0])
console.log(listaComidasPreferidas[1])
console.log(listaComidasPreferidas[2])
console.log(listaComidasPreferidas[3])
console.log(listaComidasPreferidas[4])


const comidaUser = prompt("Qual é a sua comida favorita?")
listaComidasPreferidas[1] = comidaUser
console.log(listaComidasPreferidas)

// listaComidasPreferidas[1] = comidaUser
// console.log(listaComidasPreferidas)

// Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
const listaDeTarefas = []
const tarefasUser1 = prompt("Digite uma tarefa sua de hoje")
const tarefaUser2 = prompt("Digite outra tarefa")
const tarefasUser3 = prompt("Digite mais uma tarefa")
listaDeTarefas.push(tarefasUser1)


const tarefaEscolhida = prompt("Escolha uma tarefa")
listaDeTarefas.splice(number(tarefaEscolhida), 1)
console.log(listaDeTarefas)


