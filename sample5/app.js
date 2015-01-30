// 外部tsファイルserverModule.tsを読み込み、serverModuleという名前をつける。
var serverModule = require("./server_modules/serverModule");
var Main = (function () {
    function Main() {
        // serverModuleの中のServerAPIクラスのインスタンスを作成
        var serverAPI = new serverModule.ServerAPI();
        // ServerAPIの関数を実行
        serverAPI.initServer();
    }
    return Main;
})();
var main = new Main();
