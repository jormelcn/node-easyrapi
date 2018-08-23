"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const easyerror_1 = require("easyerror");
class EndPointController {
    constructor(request, response) {
        this.request = request;
        this.response = response;
        this.onInit();
    }
    onInit() {
    }
    onFinish() {
    }
    reportError(error, httpCode) {
        if (!httpCode)
            httpCode = 500;
        this.response.status(httpCode).json(error);
        this.onFinish();
    }
    send(element) {
        this.response.json(element);
        this.onFinish();
    }
    GET(path, query) {
        this.reportError(new easyerror_1.EasyError('GET NOT IMPLEMENTED'));
    }
    DELETE(path, query) {
        this.reportError(new easyerror_1.EasyError('DELETE NOT IMPLEMENTED'));
    }
    POST(path, query, body) {
        this.reportError(new easyerror_1.EasyError('POST NOT IMPLEMENTED'));
    }
    PUT(path, query, body) {
        this.reportError(new easyerror_1.EasyError('PUT NOT IMPLEMENTED'));
    }
    PATCH(path, query, body) {
        this.reportError(new easyerror_1.EasyError('PATCH NOT IMPLEMENTED'));
    }
}
exports.EndPointController = EndPointController;
//# sourceMappingURL=end-point-controller.js.map