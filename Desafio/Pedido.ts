import { Cliente } from "./Cliente";
import { Endereco } from "./Endereco";
import { Produto } from "./Produto";

export class Pedido{
    
    private codigo: number;
    private endereco: Endereco;
    private frete: boolean;
    private valor: number;  
    private aliquota: number = 0.8;
    private data: string;
    private produto: Produto;
    private cliente:Cliente;

    constructor(codigo: number, endereco:Endereco, frete:boolean, valor: number, data: string, produto: Produto, cliente: Cliente){
        this.codigo = codigo;
        this.valor = valor;
        this.data = data;
        this.endereco = endereco;
        this.frete = frete;
        this.produto = produto;
        this.cliente = cliente;
    }

    valorTotal():number{
        let resultado: number = 0;        

        resultado = this.valor * this.aliquota;

        if (this.frete) {
            resultado = resultado * 0.15;
        }         

        return resultado;
    }
}

export interface IPedido{
    codigo: number;        
    endereco: Endereco;
    frete: boolean;
    valor: number;  
    aliquota: number;
    data: Date;
}