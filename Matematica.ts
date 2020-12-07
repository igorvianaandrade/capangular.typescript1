export class Matematica{
    pi:number = 3.14;           

    soma(numeros:Numeros):number{
        return numeros.num1 + numeros.num2;
    }

    subtrair(numeros:Numeros):number{
        return numeros.num1 - numeros.num2;
    }

    imprimirPii(): void{
        console.log(this.pi);
    }
}

export interface Numeros{
    num1: number, 
    num2: number
}
