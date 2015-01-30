/// <reference path="./node.d.ts" />;
import http = require("http");
class Main
{
    constructor()
    {
        // httpサーバーを設定する
        var server:http.Server = http.createServer((request:http.ServerRequest, response:http.ServerResponse) => this.requestHandler(request, response));
        // サーバーを起動してリクエストを待ち受け状態にする
        server.listen("5000");
    }

    /*
    * サーバーにリクエストがあった時に実行される関数
     */
    private requestHandler(request:http.ServerRequest, response:http.ServerResponse):void
    {
        response.end("Hello! Node.js with TypeScript");
    }
}
var main:Main = new Main();
