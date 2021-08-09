// 1 - Callback

console.log("1")

setTimeout(function(){
  console.log("5")
},2000)

//2-  Promise

let p = Promise.resolve(5);

console.log("Outros códigos");

console.log(p);

p.then((value) => {console.log(`O valor é ${value}`)})
  .then((value) => {return value + 5})


// 3 - Falha nas promises

let p = Promise.resolve(new Error("Não deu certo"));

console.log("lalala");

p.then((value) => consolelog(value))
.catch(reason => console.log("Falhou " + reason))


// 4- Reject

function verificarNumero(num) {
  return new Promise((resolve,reject) => {
    if(num ==2){
      resolve(`o número é ${num}`)
    } else {
      reject(new Error("Falhou'"));
    }
  });
}

verificarNumero(2)
verificarNumero(3)

// 5 - Resolvendo várias Promises

const p1 = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve(15);
  }, 5000)
});

const p2 = Promise.resolve(10);

const p3 = new Promise((resolve, reject) => {
  resolve(12);
});

Promise.all([p1,p2,p3]).then((values) => console.log(values));

// 6 - Async functions
async function somar(a,b){
  return a+b;
}

somar(2,4).then(value => console.log(value));


// 7 - Await

function somaComDelay(a,b) {
  return new Promise(resolve => {
    setTimeout(function(){
      resolve(a+b);
    },4000);
  })
}

async function resSoma(a,b,c) {
  let x = somaComDelay(a,b);
  let y = c;

  return await x + y;
}

resSoma(1,2,3).then(value => console.log(value));

// 8 - Generators
