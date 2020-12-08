export class Produto{

    private produto: IProduto = {}; 

    constructor(){}

    setProduto(produto: IProduto): void{
        this.produto.codigo = produto.codigo;
        this.produto.descricao = produto.descricao;
        this.produto.valor = produto.valor;
        this.produto.qtdeEstoque = produto.qtdeEstoque;
    }   

}

export interface IProduto{
    codigo?: number;
    descricao?: string;
    valor?: number;
    qtdeEstoque?: number;    
}