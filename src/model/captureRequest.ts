export class CaptureRequest {
  /** @description Valor da captura sem separador de milhar e decimal. Exemplos: R$ 10,00 = 1000 |R$ 0,50 = 50 */
  amount: number;

  constructor(data: any) {
    data = (typeof data !== 'undefined') ? data : {};
    this.amount = data.amount || 0;
  }
}