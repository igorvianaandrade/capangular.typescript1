export class ProdutoClass{

    private produto: Produto; 

    constructor(){}

    setProduto(produto: Produto): void{
        this.produto.codigo = produto.codigo;
        this.produto.descricao = produto.descricao;
        this.produto.valor = produto.valor;
        this.produto.qtdeEstoque = produto.qtdeEstoque;
    }   

}

export interface Produto{
    codigo: number;
    descricao: string;
    valor: number;
    qtdeEstoque: number;    
}