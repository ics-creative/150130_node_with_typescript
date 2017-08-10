"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
class ServerAPI {
    initServer() {
        const server = http.createServer((request, response) => this.requestHandler(request, response));
        server.listen('5000');
    }
    /*
     * サーバーにリクエストがあった時に実行される関数
     */
    requestHandler(request, response) {
        response.end('Call From ServeAPI Class');
    }
}
exports.ServerAPI = ServerAPI;
//# sourceMappingURL=serverModule.js.map