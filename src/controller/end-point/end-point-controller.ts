import { EndPointControllerInterface } from "./end-point-controller-interface";
import { ControllerSuccessInfo } from "../controller-success-info";
import { EasyErrorHandler, EasyError } from "easyerror";
import { Request, Response } from 'express';

export class EndPointController<TP, TQ, TB> implements EndPointControllerInterface<TP, TQ, TB>, EasyErrorHandler{

  errorHandler : EasyErrorHandler;

  constructor(
    private request : Request,
    private response : Response,
  ){
    
    this.onInit();
  }

  onInit(){

  }

  onFinish(){

  }

  reportError(error : EasyError, httpCode ?: number){
    if(!httpCode) httpCode = 500;
    this.response.status(httpCode).json(error);
    this.onFinish();
  }

  send(element : TB | TB[] | ControllerSuccessInfo) : void{
    this.response.json(element);
    this.onFinish();
  }

  GET(path : TP, query : TQ) : void{
    this.reportError(new EasyError('GET NOT IMPLEMENTED'));
  }

  DELETE(path : TP, query : TQ) : void{
    this.reportError(new EasyError('DELETE NOT IMPLEMENTED'));
  }

  POST(path : TP, query : TQ, body : TB | TB[]) : void{
    this.reportError(new EasyError('POST NOT IMPLEMENTED'));
  }

  PUT(path : TP, query : TQ, body : TB) : void{
    this.reportError(new EasyError('PUT NOT IMPLEMENTED'));
  }
  
  PATCH(path : TP, query : TP, body : any) : void{
    this.reportError(new EasyError('PATCH NOT IMPLEMENTED'));
  }

}