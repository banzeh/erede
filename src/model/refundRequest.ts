import { Url } from "./url";

export interface RefundRequest {
  /** @description Valor do cancelamento sem separador de milhar e casa decimal. Ex.: R$ 10,00 = 1000 | R$ 0,50 = 50 */
  amount: number;
  /** @description URLs de Callback */
  urls: Url;
}