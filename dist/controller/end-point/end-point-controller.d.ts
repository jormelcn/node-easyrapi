/// <reference types="express" />
import { EndPointControllerInterface } from "./end-point-controller-interface";
import { ControllerSuccessInfo } from "../controller-success-info";
import { EasyErrorHandler, EasyError } from "easyerror";
import { Request, Response } from 'express';
export declare class EndPointController<TP, TQ, TB> implements EndPointControllerInterface<TP, TQ, TB>, EasyErrorHandler {
    private request;
    private response;
    errorHandler: EasyErrorHandler;
    constructor(request: Request, response: Response);
    onInit(): void;
    onFinish(): void;
    reportError(error: EasyError, httpCode?: number): void;
    send(element: TB | TB[] | ControllerSuccessInfo): void;
    GET(path: TP, query: TQ): void;
    DELETE(path: TP, query: TQ): void;
    POST(path: TP, query: TQ, body: TB | TB[]): void;
    PUT(path: TP, query: TQ, body: TB): void;
    PATCH(path: TP, query: TP, body: any): void;
}
