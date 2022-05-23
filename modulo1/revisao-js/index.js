// const nomeDoProduto = prompt("Insira o nome do produto")
// let valorDoProduto = +prompt("Insira o valor do produto") 
// // a variável valorDoProduto precisará ser uma let porque seu valor irá mudar com a aplicação do desconto

// valorDoProduto = valorDoProduto - 1

// console.log(`O produto ${nomeDoProduto} custa R$ ${valorDoProduto}`)

// const num1 = +prompt("Insira um núemro");
// const num2 = +prompt("Insira outro núemro")

// const soma = num1 + num2
// console.log(`A soma é ${soma}`)

// const subtracao = num1 - num2
// console.log(`A subtração é ${subtracao}`)

// const multiplicacao = num1 * num2
// const divisao = num1 / num2
// const restoDaDivisao = num1 % num2

// const numeroSorteado = Math.floor(Math.random() + 10) + 1
// // coloca o mais um para poder começar o número de 1 a 10
// const numeroInserido = +prompt("Insira um número de 1 a 10")

// console.log (`O numéro sorteado foi ${numeroSorteado}`)
// if (numeroInserido === numeroSorteado){
//     console.log("Seu número é igual ao número sorteado!")
// } else if (numeroInserido > numeroSorteado){
//     console.log("Seu número é maior que número sorteado!")
// } else {
//     console.log("Seu número é menor que número sorteado!")
// }

// const idade = +prompt("Qual é a sua idade?")
// const altura = +prompt("Qual é a sua altura em centímetros?")
// const problemasCardiacos = prompt("Você tem problema cardíaco? S/N")

// if (idade >= 18 && altura >= 168 && problemasCardiacos === "N"){
//     console.log ("Pode entrar!")
// } else {
//     console.log("Você não pode entrar!")
// }

// const frase =  "   Hoje eu vou comer cenoura ebaaaaaaaaaa   "
// console.log(frase, frase.length)
// console.log(frase.trim(), frase.length)
// console.log(frase.toLocaleLowerCase())
// console.log("Tem a palavra comer?", frase.includes("comer"))
// console.log("Tem a palavra batata?", frase.includes("batata"))

// const novaFrase = frase.replaceAll("cenoura", "batata")
// console.log(novaFrase)
// console.log("Tem a palavra comer?", novaFrase.includes("comer"))
// console.log("Tem a palavra batata?", novaFrase.includes("batata"))

// const listaDeCompras = ["batata", "cenoura", "beterraba"]
// console.log(listaDeCompras[1])
// console.log("O tamanho da lista:", listaDeCompras.length)
// listaDeCompras.push("Mandioca")
// console.log(listaDeCompras)
// listaDeCompras.includes("cenoura")
// console.log("Tem cenoura?", listaDeCompras.includes("cenoura"))
// listaDeCompras.splice(1, 1)
// // no splice o segundo número indica a quantidade de ítens que você quer deletar a partir do indice declarado, o primeiro número
// console.log(listaDeCompras)

// const array = [6, 7, 8, 9, 10]



// function divideDois1 (arrayDeNumeros) {
//     const primeiro = arrayDeNumeros[0] / 2
//     const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros [arrayDeNumeros.length-1]= ultimo
//     return arrayDeNumeros

// }

// let divideDois2 = function (arrayDeNumeros){
//     const primeiro = arrayDeNumeros[0] / 2
//     const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros [arrayDeNumeros.length-1]= ultimo
//     return arrayDeNumeros
// }

// let divideDois3 = (arrayDeNumeros) => {
//     const primeiro = arrayDeNumeros[0] / 2
//     const ultimo = arrayDeNumeros[arrayDeNumeros.length-1] / 2

//     arrayDeNumeros[0] = primeiro
//     arrayDeNumeros [arrayDeNumeros.length-1]= ultimo
//     return arrayDeNumeros
// }

// console.log(divideDois1(array))
// console.log(divideDois2(array))
// console.log(divideDois3(array))
// // nesse caso ele está dividindo sempre o ultimo array porque nós modificamos o valor atribuido ao chamar o array novamente na função

// let dadosUsusario = {
//     nome: "Andreza",
//     idade: 44,
//     gênero_musical: "MPB"
// }
// console.log(`o nome da pessoa é ${dadosUsusario.nome}, ela tem ${dadosUsusario.idade} anos e gosta muito de ${dadosUsusario.gênero_musical}`)

// // novo ususário com mesma idade e gênero musical mas nome diferente

// let novosDados = {
//     ...dadosUsusario,
//     nome: "Simioni"
// }
// console.log(novosDados)

// const numero = +prompt("digite um número")

// if (numero % 2 === 0){
// console.log("Esse número é par")
// } else {
//     console.log("Esse número é ímpar")
// }

// const bichinho = prompt("Digite um bichinho")

// if (bichinho === "cachorro"){
//     console.log("Au Au")
// } else if (bichinho === "gato"){
//     console.log(" Miau")
// }else if (bichinho === "vaca"){
//     console.log(" Miau")
// }else {
//     console.log(" Barulho não encontrado")
// }

// como o else if ficou para as condições === pode usar um switch

// switch(bichinho){
//     case "cachorro":
//         console.log("Au Au")
//         break;
//  case "gato":
//         console.log("Miau")
//         break;
//     case "vaca":
//         console.log("Muuuuu")
//         break;
//         default:
//         console.log("Barulho não encontrado")
// }

// const numeros = [11, 150, 180, 14, 12, 1113]
// let maior = -Infinity
// // let i = 0
// let maior = -Infinity
// while(i< numeros.length){
// if (numeros[i] > maior){
//     maior = numeros[i]
// }
// i++
// }
// console.log(`O maior número é ${maior}`)

// for(let i=0; i < numeros.length; i++){
//     if(numeros[i] > maior){
//         maior = numeros[i]
//     }
// }
// console.log(`O maior número é ${maior}`)

// for (let numero of numeros){
//     if(numero > maior){
//         maior = numero
//     }
// }
// console.log(`O maior número é ${maior}`)