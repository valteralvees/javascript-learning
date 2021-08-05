let num = 1;
let num1 = 5;
let num2 = 3;
let num3 = 6;
let num4 = 2;

function imprimirNumeros(...args){
  for(let i = 0; i< args.length;i++);
    console.log(args[i]);
}

imprimirNumeros(num,num1,num2);
console.log('pausa')
imprimirNumeros(num2,num3);
console.log('pausa')
