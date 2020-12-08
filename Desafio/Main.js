"use strict";
exports.__esModule = true;
var Cliente_1 = require("./Cliente");
var Endereco_1 = require("./Endereco");
var FormaPagamento_1 = require("./FormaPagamento");
var Produto_1 = require("./Produto");
var cliente = new Cliente_1.ClienteClass("Dan", "123.456.789-78");
var prod;
prod.codigo = 1;
prod.descricao = "TV";
prod.qtdeEstoque = 5;
prod.valor = 500;
var classeProduto = new Produto_1.ProdutoClass();
var end;
end.rua = 'rua das amendoeiras';
end.cidade = 'salvador';
end.estado = 'ba';
end.cep = '40.420.750';
var classeEndereco = new Endereco_1.EnderecoClass();
var formaPagamento;
var forma = new FormaPagamento_1.FormaPagamentoClass();
forma.pagarPorBoletoPorPadrao();
/*console.log(forma.pagarPorBoletoPorPadrao());
console.log(forma.pagarPorCartaoCredito());
console.log(forma.pagarPorCartaoDebito());*/ 
