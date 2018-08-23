import { DataControllerInterface } from './data-controller-interface';
import { EasyErrorHandler, EasyError } from 'easyerror';
import { ControllerSuccessInfo } from '../controller-success-info';
import * as Debug from 'debug';

export abstract class DataController<T> implements DataControllerInterface<T>{
  
  static debug = Debug('easy-api:data-controller');
  private errorHandler : EasyErrorHandler;

  constructor(errorHandler : EasyErrorHandler) {
    this.errorHandler = errorHandler;
  }

  public reportError(error : EasyError, errorHandler : EasyErrorHandler) : void{
    if(errorHandler)
      errorHandler.reportError(error);
    else if(this.errorHandler)
      this.errorHandler.reportError(error);
    else
      DataController.debug('Unhandled Error on DataController');
  }

  insertElement(element : T, callback : (info : ControllerSuccessInfo) => void, errorHandler ?: EasyErrorHandler) : void{
    throw new EasyError('Insert Element Not Implemented');
  }

  insertElements(elements : T[], callback : (info : ControllerSuccessInfo) => void, errorHandler ?: EasyErrorHandler) : void{
    throw new EasyError('Insert Elements Not Implemented');
  }

  getElement( id : string, callback : (element : T, info : ControllerSuccessInfo) => void, errorHandler ?: EasyErrorHandler) : void{
    throw new EasyError('Get Element Not Implemented');
  }

  getElements(query : string, callback : (elements : T[], info : ControllerSuccessInfo) => void, errorHandler ?: EasyErrorHandler) : void{
    throw new EasyError('Get Elements Not Implemented');
  }

  updateElement(id : string, element : T, callback : (info : ControllerSuccessInfo) => void, errorHandler ?: EasyErrorHandler) : void{
    throw new EasyError('Update Element Not Implemented');
  }
  updateElements(query : string, values : any, callback : (info : ControllerSuccessInfo) => void, errorHandler ?: EasyErrorHandler) : void{
    throw new EasyError('Update Elements Not Implemented');
  }

  deleteElement(id : string, callback : (info : ControllerSuccessInfo) => void, errorHandler ?: EasyErrorHandler) : void{
    throw new EasyError('Delete Element Not Implemented');
  }
  deleteElements(query : string, callback : (info : ControllerSuccessInfo) => void, errorHandler ?: EasyErrorHandler) : void{
    throw new EasyError('Delete Elements Not Implemented');
  }
}