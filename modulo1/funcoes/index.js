// Exercícios de interpretação de código
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// O que vai ser impresso no console? os números 10 e 50
// O que aconteceria se retirasse os dois console.log e simplesmente 
// invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console? Não aparece nada

// let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// não retorna nada porque as ações estão no return 
// essa função quer que o testo digitado pelo usuário seja colocado em letra minuscula e que se procure a palavra cenoura neste texto digitado
// verdadeiro / verdadeiro / falso

// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

// function euMesma () {
//     console.log("Eu sou Karla, tenho 36 anos, moro em Lagoa Santa e sou estudante")
// }
const nome = "Fernanda" 
const idade = 30
const cidade = "Belo Horizonte"
const ocupacao = "desempregada" 

function euMesma2 (nome, idade, cidade, ocupacao) {
    // console.log(`Eu sou, ${nome}, tenho, ${idade}, anos, moro em, ${cidade}, e sou, ${ocupacao}`)
    return `Eu sou, ${nome}, tenho, ${idade}, anos, moro em, ${cidade}, e sou, ${ocupacao}`
}
// 
console.log(euMesma2(nome, idade, cidade, ocupacao))

// Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. 
// Invoque a função e imprima no console o resultado.
// const num1 = 10
// const num2 = 20

// function operacoes (num){
//     const soma = (num1 + num2)
//     const multiplicacao = (num1 * num2)

//     return soma, multiplicacao
// }
// const resultado = num1 + num2
// const resultado2 = num1 * num2

// console.log(resultado, resultado2)

// function booleano (num) {
//     const comparacao = num1 >= num2
//     return num

// } 
// const resposta = num1 >= num2
// console.log(resposta)
// const num1 = 33
// function comparar (num){
//     const numero = num1 % 2 === 0 
    
    
//     return num

// }
// const resposta = num1 % 2 === 0 
// console.log(resposta)

// function mensagem (Karla) {//o parâmetro é Karla. Em uma variável será argumento
   
//     // console.log(`A palavra é ${Karla.toUpperCase()} e ela tem ${Karla.length}`)
//    return `A palavra é ${Karla.toUpperCase()} e ela tem ${Karla.length}`
// }
// console.log(mensagem("Deu certo"))
// // mensagem("Deu certo")
// (mensagem("Deu certo") invocar a function



let num1 = prompt(number("digite um número"))
// prompt(number("insira um número"))
// const respostavalor = num1

let num2 = prompt("digite mais um número")
// prompt(number("insira mais um número"))
// const respostavalor2 = num2

function somar (numero1, numero2){
    let soma = num1 + num2
        return soma
}

console.log(somar(2,3))
// function multiplicar (digitado){
    
//     return digitado(num1 * num2)
// }
// (multiplicar(digitado))

// function dividir (digitado2){
    
//     return digitado2(num1 / num2)
// }
// (dividir(digitado2))

// function subtrair (digitado3){
     
//     return digitado3(num1 - num2)
// }
// (subtrair(digitado3))

// console.log(`os números inseridos foram:, ${num1}, ${num2}, ${digitado1},${digitado},${digitado2}, ${digitado3}`)