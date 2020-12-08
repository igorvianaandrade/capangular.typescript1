"use strict";
exports.__esModule = true;
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto() {
        this.produto = {};
    }
    Produto.prototype.setProduto = function (produto) {
        this.produto.codigo = produto.codigo;
        this.produto.descricao = produto.descricao;
        this.produto.valor = produto.valor;
        this.produto.qtdeEstoque = produto.qtdeEstoque;
    };
    return Produto;
}());
exports.Produto = Produto;
