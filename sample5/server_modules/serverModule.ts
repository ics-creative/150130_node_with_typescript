/// <reference path="../node.d.ts" />;
export class ServerAPI
{
    private _http = require("http");
    public initServer():void
    {
        var server = this._http.createServer((request, response) => this.requestHandler(request, response));
        server.listen("5000");
    }
    /*
     * サーバーにリクエストがあった時に実行される関数
     */
    private requestHandler(request, response):void
    {
        response.end("Call From ServeAPI Class");
    }
}
