/// <reference types="debug" />
import { DataControllerInterface } from './data-controller-interface';
import { EasyErrorHandler, EasyError } from 'easyerror';
import { ControllerSuccessInfo } from '../controller-success-info';
import * as Debug from 'debug';
export declare abstract class DataController<T> implements DataControllerInterface<T> {
    static debug: Debug.IDebugger;
    private errorHandler;
    constructor(errorHandler: EasyErrorHandler);
    reportError(error: EasyError, errorHandler: EasyErrorHandler): void;
    insertElement(element: T, callback: (info: ControllerSuccessInfo) => void, errorHandler?: EasyErrorHandler): void;
    insertElements(elements: T[], callback: (info: ControllerSuccessInfo) => void, errorHandler?: EasyErrorHandler): void;
    getElement(id: string, callback: (element: T, info: ControllerSuccessInfo) => void, errorHandler?: EasyErrorHandler): void;
    getElements(query: string, callback: (elements: T[], info: ControllerSuccessInfo) => void, errorHandler?: EasyErrorHandler): void;
    updateElement(id: string, element: T, callback: (info: ControllerSuccessInfo) => void, errorHandler?: EasyErrorHandler): void;
    updateElements(query: string, values: any, callback: (info: ControllerSuccessInfo) => void, errorHandler?: EasyErrorHandler): void;
    deleteElement(id: string, callback: (info: ControllerSuccessInfo) => void, errorHandler?: EasyErrorHandler): void;
    deleteElements(query: string, callback: (info: ControllerSuccessInfo) => void, errorHandler?: EasyErrorHandler): void;
}
