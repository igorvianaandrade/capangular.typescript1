import { ICategoria, Categoria } from './Categoria';
import { ICliente, Cliente } from './Cliente';
import { IDesconto, Desconto } from './Desconto';
import { IEndereco, Endereco } from './Endereco';
import { IFormaPagamento, FormaPagamento } from './FormaPagamento';
import { IFornecedor, Fornecedor } from './Fornecedor';
import { IPedido, Pedido } from './Pedido';
import { IProduto, Produto } from './Produto';

var cliente = new Cliente("Dan", "123.456.789-78");

/*var prod:Produto;
prod.codigo = 1;
prod.descricao = "TV";
prod.qtdeEstoque = 5;
prod.valor = 500

var classeProduto = new ProdutoClass();*/

var endereco1 = new Endereco();

var end: Endereco = {rua: 'rua das amendoeiras', cidade:'salvador', estado:'ba', cep:'40.420.750'};

endereco1.setEndereco(end);

/*
var formaPagamento:FormaPagamento;
var forma = new FormaPagamentoClass();

forma.pagarPorBoletoPorPadrao();

/*console.log(forma.pagarPorBoletoPorPadrao());
console.log(forma.pagarPorCartaoCredito());
console.log(forma.pagarPorCartaoDebito());*/