//1- trim
let nome = "    valter";

let nomeCorrigido = nome.trim();

console.log(nome)
console.log(nomeCorrigido);

//2 - padstart

let sku = "34";

console.log(sku.padStart(6,"0"))
//000034


//3- split 
let frase ="testando o metodo split"

console.log(frase.split(" "))

//4- join
let frase ="testando o metodo split"

let palavras = frase.split(" ")

let novaFrase = palavras.join("@")

console.log(novaFrase)

//5- repeat
let palavra = "Repetir ";

console.log(palavra.repeat(20))
