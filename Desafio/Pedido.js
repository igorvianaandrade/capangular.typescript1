"use strict";
exports.__esModule = true;
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(codigo, valor, data, endereco) {
        this.aliquota = 0.8;
        this.codigo = codigo;
        this.valor = valor;
        this.data = data;
        this.endereco = endereco;
    }
    Pedido.prototype.valorTotal = function (frete) {
        var resultado = 0;
        resultado = this.valor * this.aliquota;
        if (frete) {
            resultado = resultado * 0.15;
        }
        return resultado;
    };
    return Pedido;
}());
exports.Pedido = Pedido;
