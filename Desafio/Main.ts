import { Categoria, CategoriaClass } from './Categoria';
import { Cliente, ClienteClass } from './Cliente';
import { Desconto, DescontoClass } from './Desconto';
import { Endereco, EnderecoClass } from './Endereco';
import { FormaPagamento, FormaPagamentoClass } from './FormaPagamento';
import { Fornecedor, FornecedorClass } from './Fornecedor';
import { Pedido, PedidoClass } from './Pedido';
import { Produto, ProdutoClass } from './Produto';

var cliente = new ClienteClass("Dan", "123.456.789-78");

var prod:Produto;
prod.codigo = 1;
prod.descricao = "TV";
prod.qtdeEstoque = 5;
prod.valor = 500

var classeProduto = new ProdutoClass();

var end:Endereco;
end.rua = 'rua das amendoeiras';
end.cidade = 'salvador';
end.estado = 'ba';
end.cep = '40.420.750';
var classeEndereco = new EnderecoClass();

var formaPagamento:FormaPagamento;
var forma = new FormaPagamentoClass();

forma.pagarPorBoletoPorPadrao();

/*console.log(forma.pagarPorBoletoPorPadrao());
console.log(forma.pagarPorCartaoCredito());
console.log(forma.pagarPorCartaoDebito());*/