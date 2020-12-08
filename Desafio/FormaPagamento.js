"use strict";
exports.__esModule = true;
exports.FormaPagamentoClass = void 0;
var FormaPagamentoClass = /** @class */ (function () {
    function FormaPagamentoClass() {
        this.pagamento = "";
        this.pagamento = "boleto";
    }
    FormaPagamentoClass.prototype.pagarPorBoletoPorPadrao = function () {
        this.pagamento = "boleto";
        return "Pagamento via " + this.pagamento + " ...";
    };
    FormaPagamentoClass.prototype.pagarPorCartaoCredito = function () {
        this.pagamento = "cartão de crédito";
        return "Pagamento via " + this.pagamento + " ...";
    };
    FormaPagamentoClass.prototype.pagarPorCartaoDebito = function () {
        this.pagamento = "cartão de débito";
        return "Pagamento via " + this.pagamento + " ...";
    };
    return FormaPagamentoClass;
}());
exports.FormaPagamentoClass = FormaPagamentoClass;
