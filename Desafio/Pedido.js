"use strict";
exports.__esModule = true;
exports.PedidoClass = void 0;
var PedidoClass = /** @class */ (function () {
    function PedidoClass(codigo, valor) {
        this.aliquota = 0.8;
        this.codigo = codigo;
        this.valor = valor;
    }
    PedidoClass.prototype.valorTotal = function (frete) {
        var resultado = 0;
        resultado = this.valor * this.aliquota;
        if (frete) {
            resultado = resultado * 0.15;
        }
        return resultado;
    };
    return PedidoClass;
}());
exports.PedidoClass = PedidoClass;
