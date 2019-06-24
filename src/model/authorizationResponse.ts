import { ResponseBase } from "./responseBase";
import { Link } from "./link";

export interface AuthorizationResponse extends ResponseBase {
  dateTime: Date;
  affiliation: string;
  status: string;
  reference: string;
  tid: string;
  nsu: string;
  authorizationCode: string;
  kind: string;
  amount: number;
  installments: string;
  cardHolderName: string;
  cardBin: string;
  last4: string;
  softDescriptor: string;
  origin: string;
  subscription: string;
  distributorAffiliation: string;
}