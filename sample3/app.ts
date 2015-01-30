// Node.jsの型定義ファイルの読み込み
/// <reference path="./libs/node.d.ts" />;
var http = require("http");
class Main
{
    constructor()
    {
        var server = http.createServer((request, response) => this.requestHandler(request, response));
        server.listen("5000");
    }

    /*
    * サーバーにリクエストがあった時に実行される関数
     */
    private requestHandler(request, response):void
    {
        response.end("Hello! Node.js with TypeScript");
    }
}
var main:Main = new Main();
