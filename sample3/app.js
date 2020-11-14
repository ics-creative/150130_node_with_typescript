"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
class Main {
    constructor() {
        // httpサーバーを設定する
        const server = http.createServer((request, response) => this.requestHandler(request, response));
        // サーバーを起動してリクエストを待ち受け状態にする
        server.listen("5000");
        // ログを出力する
        console.log("http://localhost:5000 へアクセスください");
    }
    /*
     * サーバーにリクエストがあった時に実行される関数
     */
    requestHandler(request, response) {
        response.end("Hello! Node.js with TypeScript");
    }
}
new Main();
//# sourceMappingURL=app.js.map