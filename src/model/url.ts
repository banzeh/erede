export class Url {
  /** @description Campo que identifica qual o tipo da url: callback */
  kind: string;
  /** @description Url que receberá o callback com o status do cancelamento após processado pela Rede. Também é possível cadastrar as url no portal userede. */
  url: string;

  constructor(data?: any) {
    data = (typeof data !== 'undefined') ? data : {};
    this.kind = data. kind || '';
    this.url = data. url || '';
  }
}