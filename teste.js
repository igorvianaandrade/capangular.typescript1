var variavel = 1;
var variavel2 = 100;
var constante = 100;
var nome = "Dan";
console.log(nome);
var qualquer = "abc";
qualquer = 1;
////////// CLASSES /////////////////
var Saudacao = /** @class */ (function () {
    function Saudacao() {
    }
    Saudacao.prototype.saudacao = function () {
        console.log("Hello World!!!");
    };
    return Saudacao;
}());
var obj = new Saudacao();
obj.saudacao();
//Asserção de tipo
var str = '1';
var str2 = str; //str is now of type number
console.log(typeof (str2));
//Loop for usando in
var j;
var n = "a b c";
for (j in n) {
    console.log(n[j]);
}
