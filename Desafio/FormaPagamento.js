"use strict";
exports.__esModule = true;
exports.FormaPagamento = void 0;
var FormaPagamento = /** @class */ (function () {
    function FormaPagamento() {
        this.pagamento = "";
        this.pagamento = "boleto";
    }
    FormaPagamento.prototype.pagarPorBoletoPorPadrao = function () {
        this.pagamento = "boleto";
        return "Pagamento via " + this.pagamento + " ...";
    };
    FormaPagamento.prototype.pagarPorCartaoCredito = function () {
        this.pagamento = "cartão de crédito";
        return "Pagamento via " + this.pagamento + " ...";
    };
    FormaPagamento.prototype.pagarPorCartaoDebito = function () {
        this.pagamento = "cartão de débito";
        return "Pagamento via " + this.pagamento + " ...";
    };
    return FormaPagamento;
}());
exports.FormaPagamento = FormaPagamento;
