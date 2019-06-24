import { ResponseBase } from "./responseBase";
import { Link } from './link'

/**
 * @description Classe com o modelo de resposta base
 * @author Flavio Takeuchi <flavio@banzeh.com.br>
 */
export interface CaptureResponse extends ResponseBase {
  
  dateTime: Date;
  tid: string;
  nsu: string;
  reference: string;
  authorizationCode: string;
}