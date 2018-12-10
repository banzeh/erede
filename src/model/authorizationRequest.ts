export class AuthorizationRequest {
  /** @description Define se a transação terá captura automática ou posterior. O não envio desse campo será considerado a captura automática (true) */
  capture: boolean;
  /** 
   * @description Tipo de transação a ser realizada.  
   * Para transações de crédito, utilize credit
   * Para transações de débito, utilize debit
   * @obs O não envio desse campo será considerado credit
  */
  kind: string;
  /** @description Código do pedido gerado pelo estabelecimento */
  reference: string;
  /** @description Valor total da transação sem separador de milhar e decimal.
   *Exemplos: R$ 10,00 = 1000 | R$ 0,50 = 50
  */
  amount: number;
  /**
   * @description Número de parcelas em que a transação será autorizada. De 2 a 12
   * O não envio desse campo será considerado à vista.
   */
  installments: number;
  /** @description Nome do portador impresso no cartão */ 
  cardHolderName: string;
  /** @description Número do cartão */
  cardNumber: string;
  /** @description Mês de vencimento do cartão. De 1 a 12 */
  expirationMonth: number;
  /** @description Ano de vencimento do cartão */
  expirationYear: number;
  /** 
   * @description Código de segurança do cartão (geralmente localizado no verso do cartão)
   * O envio desse parâmetro garante maior possibilidade de aprovação da transação.
   */
  securityCode: string;
  /** @description Frase personalizada que será impressa na fatura do portador */
  softDescriptor: string;
  /**
   * @description Informa ao emissor se a transação é proveniente de uma recorrência. Se transação for uma recorrência, enviar true. 
   * Caso contrário, enviar false.
   * O não envio desse campo será considerado o valor false.
   * A Rede não gerencia os agendamentos de recorrência, apenas permite aos lojistas indicarem se a transação originada é de um plano recorrente.
   */
  subscription: boolean;
  /**
   * @description Identifica a origem da transação
   * e.Rede - 1
   * MasterPass - 4
   * VISA Checkout – 6
   * O não envio desse campo será considerado uma transação e.Rede (1)
   */
  origin: number;
  /** @description Número de filiação do distribuidor (PV) */
  distributorAffiliation: number;

  constructor(data: any) {
    data = (typeof data !== 'undefined') ? data : {};
    this.capture = data.capture || false;
    this.kind = data.kind || undefined;
    this.reference = data.reference || undefined;
    this.amount = data.amount || undefined;
    this.installments = data.installments || undefined;
    this.cardHolderName = data.cardHolderName || undefined;
    this.cardNumber = data.cardNumber || undefined;
    this.expirationMonth = data.expirationMonth || undefined;
    this.expirationYear = data.expirationYear || undefined;
    this.securityCode = data.securityCode || undefined;
    this.softDescriptor = data.softDescriptor || undefined;
    this.subscription = data.subscription || false;
    this.origin = data.origin || undefined;
    this.distributorAffiliation = data.distributorAffiliation || undefined;
  }
}
