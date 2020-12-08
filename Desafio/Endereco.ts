export class EnderecoClass{

    private endereco: Endereco = {}; 

    constructor(){}

    setEndereco(endereco: Endereco): void{
        this.endereco.rua = endereco.rua;
        this.endereco.cep = endereco.cep;
        this.endereco.estado = endereco.estado;
        this.endereco.cidade = endereco.cidade;
    }
        
    toString():string{
        return `Rua ${this.endereco.rua} \n ` +
               `Cep: ${this.endereco.cep} \n ` +
               `Estado: ${this.endereco.estado} \n ` +
               `Cidade: ${this.endereco.cidade} \n `;
    }

}

export interface Endereco{
    rua?:string;
    cep?:string;
    estado?:string;
    cidade?:string;
}