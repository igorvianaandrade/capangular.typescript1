export class ClienteClass{

    private nome: string = "";
    private cpf: string = "";

    constructor(nome: string, cpf: string){        
        this.nome = nome;
        this.cpf = cpf;
    }    
}

export interface Cliente{
    nome:string;
    cpf:string;
}