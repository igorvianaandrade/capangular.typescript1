export class FormaPagamentoClass{

    private pagamento: string = "";

    constructor(){
        this.pagamento = "boleto";
    }

    public pagarPorBoletoPorPadrao():string {
        this.pagamento = "boleto";

        return `Pagamento via ${this.pagamento} ...`;
    }

    public pagarPorCartaoCredito():string{
        this.pagamento = "cartão de crédito";

        return `Pagamento via ${this.pagamento} ...`;
    }

    public pagarPorCartaoDebito():string{
        this.pagamento = "cartão de débito";
        return `Pagamento via ${this.pagamento} ...`;
    }
}

export interface FormaPagamento{
        
}