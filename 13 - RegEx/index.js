// 1- Verificando padrões com  regex

const reg1 = new RegExp('bola');

console.log(reg1.test("Tem bola?"))
//true
console.log(reg1.test("tem?"))
//false

console.log(/quadrado/.test("onde tem um quadrado"))

//2 -Verificando conjunto de caracteres

const reg1 = /[12345]/;

console.log(reg1.test("temos o numero 6"))
//false

const reg2 = /[0-9]/

console.log(reg2.test("Temos o numero"))

// 3 - Carcateres epseciais

const pontoRegex = /./; //coringa, - quebra de linha

console.log(pontoRegex.test("jisdhon"))
console.log(pontoRegex.test("jisdhon"))
console.log(pontoRegex.test("jisdhon"))
console.log(pontoRegex.test("jisdhon"))

//...

  //Testes do dia a dia
  let ano = /\d\d\d\d/;
  console.log(ano.test("05"));
  //false
  console.log(ano.test("2019"));
  //true
  console.log(ano.test("opa"))
  //false

  let dia =  /\d\d/

  console.log(dia.test("05"));


//4 - Operador not

const notab = /[^ab]/;

console.log(notab.test("a"))
//false

//5- Operador plus

const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("789126"))
//true

//6 - Operador question

const padrao = /Abacax?i/

console.log(padrao.test("Abacaxi"))
//true
console.log(padrao.test("Abacai"))
//true

// 7 - 
