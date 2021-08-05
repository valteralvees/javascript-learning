//Argumento opcional
function saudacao(nome,idade){
  if(idade === undefined){
    console.log("Olá" + nome)
  } else {
    console.log("Olá " + nome + " vbocê tem  " + idade + " anos ")
  }
}

//Argumento default
function repetirFrase(frase, n=2) {
	for(let x = 1; x <=n; x++){
		console.log(frase + " " + x);
	}

}

console.log(repetirFrase("kkkkkk"))