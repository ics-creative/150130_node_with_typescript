// Node.jsの型定義ファイルの読み込み
/// <reference path="./libs/node.d.ts" />;
var http = require("http");
var Main = (function () {
    function Main() {
        var _this = this;
        var server = http.createServer(function (request, response) { return _this.requestHandler(request, response); });
        server.listen("5000");
    }
    /*
    * サーバーにリクエストがあった時に実行される関数
     */
    Main.prototype.requestHandler = function (request, response) {
        response.end("Hello! Node.js with TypeScript");
    };
    return Main;
})();
var main = new Main();
//# sourceMappingURL=app.js.map