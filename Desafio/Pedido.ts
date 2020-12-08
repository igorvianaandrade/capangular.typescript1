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
    private cliente: Cliente;
    private valorFretePercent: number = 0.15;

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
        let taxaImposto: number = 0;        
        let valorFrete: number = 0;

        taxaImposto = this.valor * this.aliquota;
        resultado = resultado + taxaImposto;

        if (this.frete) {
           valorFrete = resultado * this.valorFretePercent;
           resultado = resultado + valorFrete;
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
    data: string;
    produto: Produto;
    cliente: Cliente;
}