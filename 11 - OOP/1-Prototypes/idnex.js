const pessoa = {
  maos: 2,
}

console.log(Object.getPrototypeOf(pessoa));
//Object


//2 -
const pessoaNova = Object.create(pessoa);

console.log(pessoaNova.maos);
//2

console.log(pessoaNova.hasOwnProperty('maos'));
//false

console.log(Object.getPrototypeOf(pessoaNova)=== pessoa);
//true

