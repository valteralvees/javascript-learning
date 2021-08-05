let pessoa = {
  "nome": "Matheus",
  "idade": 28
}

console.log(pessoa.nome)

//Conversão JSON <--> String

let pessoa = {
  "nome": "Matheus",
  "idade":28,
  "profissao":"programdor",
  "hobbies":["video game", "leitura"]

}

let pessoaTexto = JSON.stringify(pessoa)

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON)
console.log(pessoaJSON.hobbies[0])
