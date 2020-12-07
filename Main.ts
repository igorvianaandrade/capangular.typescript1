import { Matematica, Numeros } from './Matematica';

var num: number;
var numeros: Numeros;
numeros.num1 = 1;
numeros.num2 = 2;
num = new Matematica().soma(numeros);
console.log(num);

var numeros: Numeros;
numeros.num1 = 1;
numeros.num2 = 2;
num = new Matematica().subtrair(numeros);
console.log(num);