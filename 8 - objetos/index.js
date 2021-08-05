let cachorro = {
  partas: 4,
  nome:'Shark',
  latir: function() {
    console.log("Au Au");
  }
};

console.log(cachorro.nome)
cachorro.latir() // Isso é um método

// 2 - Deletar e adicionar propriedades  de um objeto
let pessoa = {
  nome: "Matheus",
  idade:29,
  profissao: "Programador"
}

console.log("2 - " + pessoa.nome)

delete pessoa.nome;

console.log("2 - " + pessoa.nome)

//3 - Uso de assign
let carro = {
  portas: 2,
  portamalas: '200l',
  motor: '2.0'
}

let adicionais = {
  tetosolar:true,
  arcondicionado: true,
}

console.log("3 - " + carro);

Object.assign(carro, adicionais);

console.log("3 - " + carro)

//4- Uso de keys
let obj = {
  'chave1':1,
  'chave2':2,
  'chave3':3,
  'chave4':4,
}

console.log("4 - " + obj);

console.log("4 - " + Object.keys(obj));

//5 - Mutação
let pessoa = {
  nome: "Matheus",
}

let pessoa2 = pessoa

console.log("5 - " + pessoa == pessoa2)


//DESESTRUTURAÇÃO
let obj = {
  rodas: 4,
  portas:4,
  tetosolar: true,
  motor: '2.0'
}

const {rodas: vRodas, portas: vPortas, tetosolar:vTetoSolar, motor: vMotor} = obj;

console.log(vRodas);
console.log(vPortas)