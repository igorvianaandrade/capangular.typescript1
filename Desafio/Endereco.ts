export class Endereco{

    private endereco: IEndereco = {}; 

    constructor(){};

    setEndereco(endereco: IEndereco): void{
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

export interface IEndereco{
    rua?:string;
    cep?:string;
    estado?:string;
    cidade?:string;
}