/// <reference path="../node.d.ts" />;
var http = require("http");
var ServerAPI = (function () {
    function ServerAPI() {
    }
    ServerAPI.prototype.initServer = function () {
        var _this = this;
        var server = http.createServer(function (request, response) { return _this.requestHandler(request, response); });
        server.listen("5000");
    };
    /*
     * サーバーにリクエストがあった時に実行される関数
     */
    ServerAPI.prototype.requestHandler = function (request, response) {
        response.end("Call From ServeAPI Class");
    };
    return ServerAPI;
})();
exports.ServerAPI = ServerAPI;
