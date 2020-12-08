"use strict";
exports.__esModule = true;
exports.FormaPagamento = void 0;
var FormaPagamento = /** @class */ (function () {
    function FormaPagamento() {
    }
    FormaPagamento.prototype.pagarPorBoletoPorPadrao = function () {
        this.formaPagamento.pagamento = "boleto";
        return "Pagamento via " + this.formaPagamento.pagamento + " ...";
    };
    FormaPagamento.prototype.pagarPorCartaoCredito = function () {
        this.formaPagamento.pagamento = "cartão de crédito";
        return "Pagamento via " + this.formaPagamento.pagamento + " ...";
    };
    FormaPagamento.prototype.pagarPorCartaoDebito = function () {
        this.formaPagamento.pagamento = "cartão de débito";
        return "Pagamento via " + this.formaPagamento.pagamento + " ...";
    };
    return FormaPagamento;
}());
exports.FormaPagamento = FormaPagamento;
