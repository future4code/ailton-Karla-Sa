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
function calculaAreaRetangulo(num1, num2) {
  return num1 * num2
  // implemente sua lógica aqui
  
}
console.log(calculaAreaRetangulo(3, 5))
console.log(calculaAreaRetangulo(2,6))
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Em que ano estamos?")
  const anoNascimento = prompt("Em que ano você nasceu?")
  const idade = anoAtual - anoNascimento

  console.log(idade)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  // const imc = peso / (altura * altura)
  
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual é o seu nome?")
  const idade = prompt("Qual é a sua idade?")
  const email = prompt("Qual é o seu e-mail?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu e-mail é ${email}`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
 const listaDeCoresPreferidas = [
   cor1 = prompt("cor preferida 1"),
   cor2 = prompt("cor preferida 2"),
   cor3 = prompt("cor preferida 3")
 ]

 console.log(listaDeCoresPreferidas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const novaPalavra = string.toUpperCase()
  // console.log(novaPalavra.toLocaleUpperCase())
  return novaPalavra
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const valorTotal = custo
  const valorUnitario = valorIngresso
  const quantidadeIngresso = valorTotal / valorUnitario

  return quantidadeIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
string1 = ("ola").length
string2 = ("abc").length
const conferirTamanho =  string1 !== string2  

return conferirTamanho
// console.log(checaStringsMesmoTamanho)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(elemento1, elemento2, elemento3) {
  // implemente sua lógica aqui
const lista= [
  elemento1 = "laranja",
  elemento2 = "Banana",
  elemento3 = "Maçã"
 ]
 const elementoEscolhido = lista[0]

 return elementoEscolhido
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}