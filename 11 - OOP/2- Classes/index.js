let chachorro = {
  patas: 4,
  raca: 'Sem Raça Definida',
  latir: function(){
    console.log("Au Au")
  }
}

let labrador = Object.create(cachorro)

labrador.latir()

// 2- Instância por função

function criaCachorro(raca,patas,cor){
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  return cachorro;
}

let doberman = criaCachorro('Doberman', 4, 'preta')

//3- Instância por New

function Cachorro(raca,patas,cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor
  this.uivar = function(){
    console.log("auuu")
  }
}

let husky = new Cachorro("Husky", 4, 'cinza');

husky.uivar();

//4- Métodos no Prototype
function Cachorro(raca,patas,cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor
}

Cachorro.prototype.uivar = function(){
  console.log("auuuu")
}

let husky = new Cachorro("Husky", 4, 'cinza');

husky.uivar()

// 5 - Class Constructor

class Cachorro {
  constructor(raca,patas,cor){
    this.raca = raca
    this.patas = patas
    this.cor = cor
  }
}

let labrador = new  Cachorro('Labrador', 4, 'amarelo')

console.log(labrador)

//Override nas propriedades do prototype

Cachorro.prototype.raca = 'SRD';


// 7- Class Methods
class Cachorro {
  constructor(raca,cor){
    this.raca = raca
    this.cor = cor
  }
  latir(){
    console.log("Au au")
  }
}

// 8- Symbols
class Cachorro {
  constructor(raca,cor){
    this.raca = raca
    this.cor = cor
  }
  latir(){
    console.log("Au au")
  }
}
let patas = Symbol();

Cachorro.prototype[patas] = 4;

let labrador = new  Cachorro('Labrador', 'amarelo')


//Acessando symbol
console.log(Cachorro.prototype[patas])
console.log(labrador[patas])

//9- Getters e Setters
class Cachorro {
  constructor(raca,cor){
    this.raca = raca
    this.cor = cor
  }
  latir(){
    console.log("Au au")
  }

  get getCor(){
    return this.cor;
  }

  set setCor(cor) {
    this.cor = cor;
  }
}

let pastor = new  Cachorro('Pastor Alemão', 'Sem cor')

console.log(pastor)

pastor.setCor = 'marrom';

console.log(pastor.getCor)

//10 - Herança
class Mamifero {
  constructor(patas){
    this.patas = patas;
  }
}

let coiote = new Mamifero(4);
console.log(coiote.patas);

class Cachorro extends Mamifero {
  constructor(patas,raca) {
    super(patas,patas)
    this.raca = raca
  }

  latir() {
    console.log("au au")
  }
}

let pug =new  Cachorro(4,"Pug")

//11 - InstanceOf
console.log (new Cachorro instanceof Mamifero)