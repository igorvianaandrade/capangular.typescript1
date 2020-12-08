export class ProdutoClass{

    private codigo: number;
    private descricao: string = "";
    private valor: number;
    private qtdeEstoque: number;

    constructor(codigo: number, descricao: string, valor: number, qtdeEstoque: number){
        this.codigo = codigo;
        this.descricao = descricao;
        this.valor = valor;
        this.qtdeEstoque = qtdeEstoque;
    }    

}

export interface Produto{
    codigo: number;
    descricao: string;
    valor: number;
    qtdeEstoque: number;

    //calcularEstoque():number;
}