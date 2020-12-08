export class EnderecoClass implements Endereco{

    private endereco: Endereco; 

    constructor(){}

    setEndereco(endereco: Endereco): void{
        this.endereco.rua = endereco.rua;
        this.endereco.cep = endereco.cep;
        this.endereco.estado = endereco.estado;
        this.endereco.cidade = endereco.cidade;
    }

    /*getRua():string{};

    getCep():string{};

    getEstado():string{};

    getCidade():string{};*/
        
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

    setEndereco(endereco: Endereco): void;
    toString():string;
}