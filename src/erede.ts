import axios, {  AxiosPromise } from 'axios';
import { AuthorizationResponse } from './model/authorizationResponse';
import { CaptureResponse } from './model/captureResponse';
import { RefundResponse } from './model/refundResponse';
import { AuthorizationRequest } from './model/authorizationRequest';
import { CaptureRequest } from './model/captureRequest';
import { RefundRequest } from './model/refundRequest';

enum URL {
  producao = "https://api.userede.com.br/erede/v1/transactions",
  sandbox = "https://api.userede.com.br/desenvolvedores/v1/transactions"
}

export class ERede {
  private filiacao: string;
  private token: string;
  private sandbox: boolean;

  constructor(filiacao: string, token: string, sandbox: boolean = false) {
    this.filiacao = filiacao;
    this.token = token;
    this.sandbox = sandbox;
  }

  /**
   * @description retorna a URL para integração dependendo do modo (sandbox ou produção)
   */
  getUrl(): string {
    return (this.sandbox) ? URL.sandbox : URL.producao;
  }

  /**
   * @description retorna a credencial de acesso que deve ser passada no HEAD da requisição
   */
  protected getCredential(): string {
    let credential = this.filiacao + ':' + this.token;
    return 'Basic '.concat(Buffer.from(credential).toString('base64'));
  }

  /**
   * @description gera uma autorização no eRede
   * @url https://www.userede.com.br/desenvolvedores/pt/produto/e-Rede#documentacao-autorizacao
   */
  authorization(data: AuthorizationRequest): Promise<AuthorizationResponse> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: this.getUrl(),
        headers: {
          'Authorization': this.getCredential()
        },
        data: data
      })
      .then((request) => resolve(<AuthorizationResponse> request.data))
      .catch(reject);
    })
  }

  /**
   * @description Cancela uma venda através do TID
   */
  cancelSale(TID: string, data: RefundRequest): Promise<RefundResponse> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: this.getUrl().concat(`/${TID}/refunds`),
        headers: {
          'Authorization': this.getCredential()
        },
        data: data
      })
      .then((request) => resolve(<RefundResponse> request.data))
      .catch(reject);
    })
  }

  /**
   * @description Realiza a captura da transação
   * @param TID número do TID da transação
   * @param data Objeto com o valor da captura
   */
  capture(TID: string, data: CaptureRequest): Promise<CaptureResponse> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'PUT',
        url: this.getUrl().concat(`/${TID}`),
        headers: {
          'Authorization': this.getCredential()
        },
        data: data
      })
      .then((request) => resolve(<CaptureResponse> request.data))
      .catch(reject);
    })
  }

  /**
   * @description Retorna um array com os cancelamentos do TID
   * @param TID número do TID da transação que se deseja buscar os cancelamentos
   */
  getRefunds(TID: string): Promise<RefundResponse[]> {
    return new Promise((resolve, reject) => {
      axios({
        method: 'GET',
        url: this.getUrl().concat(`/${TID}/refunds`),
        headers: {
          'Authorization': this.getCredential()
        }
      }).then((request) => {
        let refundList = <RefundResponse[]> request.data.refunds
        resolve(refundList)
      }).catch(reject);
    })
  }
}

export {
  AuthorizationResponse,
  CaptureResponse,
  RefundResponse,
  AuthorizationRequest,
  CaptureRequest,
  RefundRequest
}