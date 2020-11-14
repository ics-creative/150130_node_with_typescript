"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerAPI = void 0;
const http = require("http");
class ServerAPI {
    initServer() {
        const server = http.createServer((request, response) => this.requestHandler(request, response));
        server.listen("5000");
        // ログを出力する
        console.log("http://localhost:5000 へアクセスください");
    }
    /*
     * サーバーにリクエストがあった時に実行される関数
     */
    requestHandler(request, response) {
        response.end("Call From ServeAPI Class");
    }
}
exports.ServerAPI = ServerAPI;
//# sourceMappingURL=serverModule.js.map