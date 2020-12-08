export class Cliente{

    private nome: string = "";
    private cpf: string = "";

    constructor(nome: string, cpf: string){        
        this.nome = nome;
        this.cpf = cpf;
    }    
}

export interface ICliente{
    nome:string;
    cpf:string;
}