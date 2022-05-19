// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = number(prompt("Digite a altura do retângulo"))
  const largura = number(prompt("Digite a largura do retângulo"))
  console.log(altura * largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = number(prompt("Digite o ano atual"))
  const anoDeNascimento = number(prompt("Digite o ano do seu nascimento"))

  console.log(anoAtual - anoDeNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
return (peso / (altura * altura))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
const nome = prompt("Qual é o seu nome?")
const idade = number(prompt("Qual é a sua idade?"))
const email = prompt("Qual é o seu e-mail?")

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("digite uma cor favorita")
const cor2 = prompt("digite outra cor favorita")
const cor3 = prompt("digite mais uma cor favorita")
console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const primeiroNumero = array[0]
const ultimoNumero = array [array.length -1]

array [0] = ultimoNumero
array[array.length - 1] = primeiroNumero

return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
const anoAtual = number(prompt("digite o ano atual"))
const anoDeNascimento = number(prompt("digite o ano de nascimento"))
const anoCarteira = number(prompt("digite o ano em que a carteira foi emitida"))

const idade = anoAtual - anoDeNascimento
const tempoCarteira = anoAtual - anoCarteira

const cond1 = idade <= 18 && tempoCarteira >= 5
const cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10
const cond3 = idade > 50 && tempoCarteira >= 15

console.log(cond1 || cond2 || cond3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
const bissexto = ano % 400 === 0
const bissexto2 = (ano % 4 === 0) && (ano % 100 !== 0)
return cond1 || cond2
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idade = prompt("você tem mais de 18 anos?")
const escolaridade = prompt("você concluiu o ensino médio?")
const disponibilidade = prompt("você tem disponibilidade exclusiva nos horários do curso?")

console.log(idade === "sim" && escolaridade === "sim" && disponibilidade === "sim")
}