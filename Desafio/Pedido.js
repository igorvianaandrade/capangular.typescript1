"use strict";
exports.__esModule = true;
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(codigo, endereco, frete, valor, data, produto) {
        this.aliquota = 0.8;
        this.codigo = codigo;
        this.valor = valor;
        this.data = data;
        this.endereco = endereco;
        this.frete = frete;
        this.produto = produto;
    }
    Pedido.prototype.valorTotal = function () {
        var resultado = 0;
        resultado = this.valor * this.aliquota;
        if (this.frete) {
            resultado = resultado * 0.15;
        }
        return resultado;
    };
    return Pedido;
}());
exports.Pedido = Pedido;
