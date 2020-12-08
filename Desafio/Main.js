"use strict";
exports.__esModule = true;
var Cliente_1 = require("./Cliente");
var Endereco_1 = require("./Endereco");
var cliente = new Cliente_1.Cliente("Dan", "123.456.789-78");
/*var prod:Produto;
prod.codigo = 1;
prod.descricao = "TV";
prod.qtdeEstoque = 5;
prod.valor = 500

var classeProduto = new ProdutoClass();*/
var endereco1 = new Endereco_1.Endereco();
var end = { rua: 'rua das amendoeiras', cidade: 'salvador', estado: 'ba', cep: '40.420.750' };
endereco1.setEndereco(end);
/*
var formaPagamento:FormaPagamento;
var forma = new FormaPagamentoClass();

forma.pagarPorBoletoPorPadrao();

/*console.log(forma.pagarPorBoletoPorPadrao());
console.log(forma.pagarPorCartaoCredito());
console.log(forma.pagarPorCartaoDebito());*/ 
