export class FormaPagamentoClass{

    private formaPagamento: FormaPagamento; 

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

export interface FormaPagamento{
    pagamento: string;
}