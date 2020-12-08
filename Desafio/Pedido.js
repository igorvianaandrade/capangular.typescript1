"use strict";
exports.__esModule = true;
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(codigo, endereco, frete, valor, data, produto, cliente) {
        this.aliquota = 0.8;
        this.valorFretePercent = 0.15;
        this.codigo = codigo;
        this.valor = valor;
        this.data = data;
        this.endereco = endereco;
        this.frete = frete;
        this.produto = produto;
        this.cliente = cliente;
    }
    Pedido.prototype.valorTotal = function () {
        var resultado = 0;
        var taxaImposto = 0;
        var valorFrete = 0;
        taxaImposto = this.valor * this.aliquota;
        resultado = resultado + taxaImposto;
        if (this.frete) {
            valorFrete = resultado * this.valorFretePercent;
            resultado = resultado + valorFrete;
        }
        return resultado;
    };
    return Pedido;
}());
exports.Pedido = Pedido;
