//  Exercícios de interpretação de código
// // 1) mostrando os valores no console até chegar no número 5
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// 2) A) os números da lista que são maiores que 18
// b) tem que declarar a variável para receber os números da lista e mostrar o 
// que está na quer for pedida


// const numero = +prompt("digite um número")
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

// for (let numero of lista) {
    
//   if (numero > 18) {
//     let posicao = lista[4]  
// 		console.log(numero, lista[4])
// 	}
// }
// 3)
// const quantidadeTotal = 4
// // Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// para cada linha um asterisco correspondente


// Exercícios de escrita de código
// 1) Pergunte ao usuário quantos bichinhos de estimação ele 
// tem e guarde esse dado em uma variável. 
// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// let animalEstimacao = +prompt("Quantos animais de estimação você tem?")
// let quantidadeAnimais = []
// if (animalEstimacao === 0){
//     console.log("Que pena! Você pode adotar um pet!")
// } else{
//     for (let i= 0; i < animalEstimacao; i++ ){
        
//     quantidadeAnimais.push(prompt("qual é o nome do seu pet"))

//     console.log(quantidadeAnimais)
//     }
//     }

    // Considere que você tenha acesso a um array  (chamado de 'array original') que é 
    // composto somente de números. Baseando-se nisso, 
    // crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    // a) Escreva um programa que imprime cada um dos valores do array original.

    const arrayOriginal = [1, 2, 3, 5, 9, 10]

    const imprime = (numeros) => {
       
        while (arrayOriginal % 0){
                console.log(arrayOriginal) 
            
        }

        
    }

    imprime(arrayOriginal[0])

    // b) Escreva um programa que imprime cada um dos valores do array original divididos por 10