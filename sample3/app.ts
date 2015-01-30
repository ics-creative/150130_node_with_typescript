/// <reference path="./node.d.ts" />;
import http = require("http");
class Main
{
    constructor()
    {
        var server = http.createServer((request:http.ServerRequest, response:http.ServerResponse) => this.requestHandler(request, response));
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
