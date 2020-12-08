"use strict";
exports.__esModule = true;
exports.Endereco = void 0;
var Endereco = /** @class */ (function () {
    function Endereco(endereco) {
        this.endereco = {};
        this.endereco.rua = endereco.rua;
        this.endereco.cep = endereco.cep;
        this.endereco.estado = endereco.estado;
        this.endereco.cidade = endereco.cidade;
    }
    Endereco.prototype.setEndereco = function (endereco) {
        this.endereco.rua = endereco.rua;
        this.endereco.cep = endereco.cep;
        this.endereco.estado = endereco.estado;
        this.endereco.cidade = endereco.cidade;
    };
    Endereco.prototype.toString = function () {
        return "Rua " + this.endereco.rua + " \n " +
            ("Cep: " + this.endereco.cep + " \n ") +
            ("Estado: " + this.endereco.estado + " \n ") +
            ("Cidade: " + this.endereco.cidade + " \n ");
    };
    return Endereco;
}());
exports.Endereco = Endereco;
