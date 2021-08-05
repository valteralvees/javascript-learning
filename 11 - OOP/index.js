const cachorro = {
  uivar:function(){
    console.log("Auuuuuu")
  },
  rosnar: function(){
    console.log("grrrrr")
  }
}

cachorro.uivar();
cachorro.rosnar();

// Aprofundamento em métodos 
const cachorro = {
  raca:'Sem Raça Definida',
  uivar:function(){
    console.log("Auuuuuu")
  },
  rosnar: function(){
    console.log("grrrrr")
  },
  setRaca: function(raca){
    this.raca = raca;
  },
  getRaca: function() {
    return "A raça é "+ this.raca;
  }
}

cachorro.setRaca('Pastor Alemão');

console.log(cachorro.raca)

console.log(cachorro.getRaca())