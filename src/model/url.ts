export interface Url {
  /** @description Campo que identifica qual o tipo da url: callback */
  kind: string;
  /** @description Url que receberá o callback com o status do cancelamento após processado pela Rede. Também é possível cadastrar as url no portal userede. */
  url: string;
}