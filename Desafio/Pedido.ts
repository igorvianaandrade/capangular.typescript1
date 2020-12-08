import { Endereco } from "./Endereco";

export class Pedido{

    private codigo: number;
    private endereco: Endereco;
    private frete: boolean;
    private valor: number;  
    private aliquota: number = 0.8;
    private data: Date;

    constructor(codigo: number, valor: number, data: Date, endereco:Endereco){
        this.codigo = codigo;
        this.valor = valor;
        this.data = data;
        this.endereco = endereco;
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

export interface IPedido{
    codigo: number;    
}