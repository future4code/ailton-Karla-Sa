````for (let numero of arrayDeNumeros){
  if(numero === numeroEscolhido){
    counter = counter + 1
  } else if (numero !== arrayDeNumeros){
    return "Número não encontrado"
   }else {
    return "O número ${(numeroEscolhido) aparece ${counter}x"
  }
  }
  contaOcorrencias()