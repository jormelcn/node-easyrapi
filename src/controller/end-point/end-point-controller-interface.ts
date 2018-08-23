import { EasyError } from 'easyerror';
import { ControllerSuccessInfo} from '../controller-success-info';

export interface EndPointControllerInterface<TP, TQ, TB> {
  
  onInit() : void;
  onFinish() : void;

  reportError(error : EasyError);
  send(element : TB | TB[] | ControllerSuccessInfo) : void;

  GET(path : TP, query : TQ) : void;
  DELETE(path : TP, query : TQ) : void;
  POST(path : TP, query : TQ, body : TB | TB[]) : void;
  PUT(path : TP, query : TQ, body : TB) : void;
  PATCH(path : TP, query : TP, body : any) : void;

}