// 外部tsファイルserverModule.tsを読み込み、serverModuleという名前をつける。
import serverModule = require("./serverModule");
class Main
{
    constructor()
    {
        // serverModuleの中のServerAPIクラスのインスタンスを作成
        var serverAPI:serverModule.ServerAPI = new serverModule.ServerAPI();
        // ServerAPIの関数を実行
        serverAPI.initServer();
    }
}
var main:Main = new Main();
