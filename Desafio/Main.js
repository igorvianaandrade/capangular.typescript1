"use strict";
exports.__esModule = true;
var Cliente_1 = require("./Cliente");
var Endereco_1 = require("./Endereco");
var cliente = new Cliente_1.ClienteClass("Dan", "123.456.789-78");
/*var prod:Produto;
prod.codigo = 1;
prod.descricao = "TV";
prod.qtdeEstoque = 5;
prod.valor = 500

var classeProduto = new ProdutoClass();*/
var endereco1 = new Endereco_1.EnderecoClass();
var end;
end.rua = 'rua das amendoeiras';
end.cidade = 'salvador';
end.estado = 'ba';
end.cep = '40.420.750';
endereco1.setEndereco(end);
/*
var formaPagamento:FormaPagamento;
var forma = new FormaPagamentoClass();

forma.pagarPorBoletoPorPadrao();

/*console.log(forma.pagarPorBoletoPorPadrao());
console.log(forma.pagarPorCartaoCredito());
console.log(forma.pagarPorCartaoDebito());*/ 