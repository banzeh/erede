import { Url } from "./url";

export class RefundRequest {
  /** @description Valor do cancelamento sem separador de milhar e casa decimal. Ex.: R$ 10,00 = 1000 | R$ 0,50 = 50 */
  amount: number;
  /** @description URLs de Callback */
  urls: Url;

  constructor(data: any) {
    data = (typeof data !== 'undefined') ? data : {};
    this.amount = data.amount || 0;
    this.urls = data.urls || new Url();
  }
}