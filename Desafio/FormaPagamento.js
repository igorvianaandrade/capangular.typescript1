"use strict";
exports.__esModule = true;
exports.FormaPagamentoClass = void 0;
var FormaPagamentoClass = /** @class */ (function () {
    function FormaPagamentoClass() {
    }
    FormaPagamentoClass.prototype.pagarPorBoletoPorPadrao = function () {
        this.formaPagamento.pagamento = "boleto";
        return "Pagamento via " + this.formaPagamento.pagamento + " ...";
    };
    FormaPagamentoClass.prototype.pagarPorCartaoCredito = function () {
        this.formaPagamento.pagamento = "cartão de crédito";
        return "Pagamento via " + this.formaPagamento.pagamento + " ...";
    };
    FormaPagamentoClass.prototype.pagarPorCartaoDebito = function () {
        this.formaPagamento.pagamento = "cartão de débito";
        return "Pagamento via " + this.formaPagamento.pagamento + " ...";
    };
    return FormaPagamentoClass;
}());
exports.FormaPagamentoClass = FormaPagamentoClass;
