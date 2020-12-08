import { ICategoria, Categoria } from './Categoria';
import { ICliente, Cliente } from './Cliente';
import { IDesconto, Desconto } from './Desconto';
import { IEndereco, Endereco } from './Endereco';
import { IFormaPagamento, FormaPagamento } from './FormaPagamento';
import { IFornecedor, Fornecedor } from './Fornecedor';
import { IPedido, Pedido } from './Pedido';
import { IProduto, Produto } from './Produto';

var cliente1 = new Cliente("Dan", "123.456.789-78");

var produto1 = new Produto();
var prod: IProduto = {codigo: 1, descricao: 'TV', valor: 100, qtdeEstoque:10};
produto1.setProduto(prod);

var endereco1 = new Endereco();
var end: IEndereco = {rua: 'rua das amendoeiras', cidade:'salvador', estado:'ba', cep:'40.420.750'};
endereco1.setEndereco(end);

var pedido1 = new Pedido(1, endereco1, true, 100, '2018-07-07', produto1, cliente1);

console.log("Valor total do Pedido: " + pedido1.valorTotal().toString());


