export class FornecedorClass{

    private nome: string = "";
    private cnpj: string = "";    

    constructor(nome: string, cnpj: string){        
        this.nome = nome;
        this.cnpj = cnpj;
    }    
}

export interface Fornecedor{
    nome:string;
    cnpj:string;
}