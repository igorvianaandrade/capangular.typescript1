"use strict";
exports.__esModule = true;
exports.ProdutoClass = void 0;
var ProdutoClass = /** @class */ (function () {
    function ProdutoClass() {
    }
    ProdutoClass.prototype.setProduto = function (produto) {
        this.produto.codigo = produto.codigo;
        this.produto.descricao = produto.descricao;
        this.produto.valor = produto.valor;
        this.produto.qtdeEstoque = produto.qtdeEstoque;
    };
    return ProdutoClass;
}());
exports.ProdutoClass = ProdutoClass;
