"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const easyerror_1 = require("easyerror");
const Debug = require("debug");
class DataController {
    constructor(errorHandler) {
        this.errorHandler = errorHandler;
    }
    reportError(error, errorHandler) {
        if (errorHandler)
            errorHandler.reportError(error);
        else if (this.errorHandler)
            this.errorHandler.reportError(error);
        else
            DataController.debug('Unhandled Error on DataController');
    }
    insertElement(element, callback, errorHandler) {
        throw new easyerror_1.EasyError('Insert Element Not Implemented');
    }
    insertElements(elements, callback, errorHandler) {
        throw new easyerror_1.EasyError('Insert Elements Not Implemented');
    }
    getElement(id, callback, errorHandler) {
        throw new easyerror_1.EasyError('Get Element Not Implemented');
    }
    getElements(query, callback, errorHandler) {
        throw new easyerror_1.EasyError('Get Elements Not Implemented');
    }
    updateElement(id, element, callback, errorHandler) {
        throw new easyerror_1.EasyError('Update Element Not Implemented');
    }
    updateElements(query, values, callback, errorHandler) {
        throw new easyerror_1.EasyError('Update Elements Not Implemented');
    }
    deleteElement(id, callback, errorHandler) {
        throw new easyerror_1.EasyError('Delete Element Not Implemented');
    }
    deleteElements(query, callback, errorHandler) {
        throw new easyerror_1.EasyError('Delete Elements Not Implemented');
    }
}
DataController.debug = Debug('easy-api:data-controller');
exports.DataController = DataController;
//# sourceMappingURL=data-controller.js.map