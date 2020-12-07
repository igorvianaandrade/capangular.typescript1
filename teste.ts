var variavel = 1;
let variavel2 = 100;
const constante = 100;

var nome: string = "Dan";

console.log(nome);

var qualquer : any = "abc";

qualquer = 1;

////////// CLASSES /////////////////

class Saudacao {
    saudacao():void {
    console.log("Hello World!!!")
}
}
var obj = new Saudacao();
obj.saudacao();

//Asserção de tipo
var str = '1'
var str2:number = <number> <any> str //str is now of type number
console.log(typeof(str2))

//Loop for usando in
var j:any;
var n:any = "a b c";
for(j in n) {
 console.log(n[j])
}