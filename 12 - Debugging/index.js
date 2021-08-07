//1- Use Strict
"use strict"

let opa = 'teste'

//2- Debugando usando console.log()

  //usar para debugar. é legal

//3 - debugger

debugger
//breakpoint no código


// 3 - tratamento dos inputs
function checarNumero(num){
  let number = Number(number);
  if(Number.isNaN(number)) {
    console.log("Por favor, passe só números para o programa")
  } else {
    return number;
  }
}

checarNumero(5)
checarNumero('sadh')

checarNumero(number)

//4 - Exception
let a = 1

if(a !=2) {
	throw new Error ("O valor de a não pode ser 1")
}

// 5 - Try e Catch
try {
  let a = 2+ b
} catch(e) {
  console.log(e)
}

// 6 - Finally
try {
  let a = 2+ b
} catch(e) {
  console.log(e)
} finally {
  console.log('executou')
}
