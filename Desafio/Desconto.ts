export class DescontoClass{

    private descricao: string = "";
    private valor: number;    

    constructor(descricao: string, valor: number){        
        this.descricao = descricao;
        this.valor = valor;
    }    
}

export interface Desconto{
    descricao: string;
    valor: number;
}