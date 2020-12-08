export class Fornecedor{

    private nome: string = "";
    private cnpj: string = "";    

    constructor(nome: string, cnpj: string){        
        this.nome = nome;
        this.cnpj = cnpj;
    }    
}

export interface IFornecedor{
    nome:string;
    cnpj:string;
}