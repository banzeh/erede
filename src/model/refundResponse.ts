import { ResponseBase } from "./responseBase";
import { Link } from "./link";

export interface RefundResponse extends ResponseBase {

  refundId: string;
  tid: string;
  nsu: string;
  cancelId: string;
  refundDateTime: Date;
  status: string;
  amount: number;
}