export class FormaPagamento{

    private formaPagamento: IFormaPagamento; 

    constructor(){}

    public pagarPorBoletoPorPadrao():string {
        this.formaPagamento.pagamento = "boleto";

        return `Pagamento via ${this.formaPagamento.pagamento} ...`;
    }

    public pagarPorCartaoCredito():string{
        this.formaPagamento.pagamento = "cartão de crédito";

        return `Pagamento via ${this.formaPagamento.pagamento} ...`;
    }

    public pagarPorCartaoDebito():string{
        this.formaPagamento.pagamento = "cartão de débito";
        return `Pagamento via ${this.formaPagamento.pagamento} ...`;
    }
}

export interface IFormaPagamento{
    pagamento: string;
}