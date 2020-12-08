export class Desconto{

    private descricao: string = "";
    private valor: number;    

    constructor(descricao: string, valor: number){        
        this.descricao = descricao;
        this.valor = valor;
    }    
}

export interface IDesconto{
    descricao: string;
    valor: number;
}