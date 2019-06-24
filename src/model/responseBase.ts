import { Link } from './link';

export interface ResponseBase {
  returnCode: string;
  returnMessage: string;
  links: Array<Link>;
}