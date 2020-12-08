export class Categoria{

    private descricao: string = "";    

    constructor(descricao: string){        
        this.descricao = descricao;        
    }    
}

export interface ICategoria{
    descricao:string;    
}