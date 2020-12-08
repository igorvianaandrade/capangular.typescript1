"use strict";
exports.__esModule = true;
exports.EnderecoClass = void 0;
var EnderecoClass = /** @class */ (function () {
    function EnderecoClass() {
        this.endereco = {};
    }
    EnderecoClass.prototype.setEndereco = function (endereco) {
        this.endereco.rua = endereco.rua;
        this.endereco.cep = endereco.cep;
        this.endereco.estado = endereco.estado;
        this.endereco.cidade = endereco.cidade;
    };
    EnderecoClass.prototype.toString = function () {
        return "Rua " + this.endereco.rua + " \n " +
            ("Cep: " + this.endereco.cep + " \n ") +
            ("Estado: " + this.endereco.estado + " \n ") +
            ("Cidade: " + this.endereco.cidade + " \n ");
    };
    return EnderecoClass;
}());
exports.EnderecoClass = EnderecoClass;
