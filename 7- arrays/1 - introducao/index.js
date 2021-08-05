// 1- Loops em Arrays
let nomes = ["Matheus", "Maria", "José"];

for (let i =0; i <= nomes.length; i++){
  console.log(nomes[i]);
}

//2- Push e Pop
let nomes = ["Matheus", "Maria", "José"];
let elementoRemovido = nomes.pop();
console.log("2- "+ nomes)

nomes.push("pedro");
console.log("2- "+ nomes)

//3 - Shift e unshift
let carros = ["BMW", "Volks", "Audi"]
let removerPrimeiroCarro = carros.shift();
console.log("3- "+ carros)

carros.unshift('Fiat')
console.log("3- "+ carros)

//4- indexOf lastIndexOf
let nums =[5,6,2,4,9,6,2];
console.log(nums.indexOf(2))
console.log(nums.lastIndexOf(2))

// 5- Slice
let nums = [0,1,2,3,4,5,6,7,8,9]

  //quero pegar o elemento 4
  console.log(nums.slice(4,5));

  //quero pegar os elementos a partir do 2 até o fim do array de
  console.log(nums.slice(2))

  //quero pegar os dois últimos elementos do array
  console.log(slice(-2))

//6- forEach

let nomes = ["Matheus","Maria","José","Pedro","João","Valter","Alves"]

nomes.forEach(nome => {
  console.log("o nome é " + nome);
});

//7- includes
let carros = ["GM","Audi","Fiat","Volks","BMW"]

console.log(carros.includes("Fiat"))

//8- reverse
let carros = ["GM","Audi","Fiat","Volks","BMW"]

console.log(carros.reverse());

//DESESTRUTURAÇÃO
let numeros = [2,4,5,8];

let [num1,num2,num3,num4] = numeros;

console.log(num3);
//5