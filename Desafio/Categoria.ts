export class CategoriaClass{

    private descricao: string = "";    

    constructor(descricao: string){        
        this.descricao = descricao;        
    }    
}

export interface Categoria{
    descricao:string;    
}