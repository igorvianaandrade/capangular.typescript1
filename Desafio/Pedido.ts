import { Endereco } from "./Endereco";

export class PedidoClass{

    private codigo: number;
    private endereco: Endereco;
    private frete: boolean;
    private valor: number;  
    private aliquota:number = 0.8;

    constructor(codigo: number, valor: number){
        this.codigo = codigo;
        this.valor = valor;
    }

    valorTotal(frete: boolean):number{
        let resultado: number = 0;        

        resultado = this.valor * this.aliquota;

        if (frete) {
            resultado = resultado * 0.15;
        }         

        return resultado;
    }
}

export interface Pedido{
    codigo: number;

    valorTotal(frete: boolean):number;
}