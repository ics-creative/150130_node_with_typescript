"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 外部tsファイルserverModule.tsを読み込み、serverModuleという名前をつける。
const serverModule = require("./serverModule");
class Main {
    constructor() {
        // serverModuleの中のServerAPIクラスのインスタンスを作成
        const serverAPI = new serverModule.ServerAPI();
        // ServerAPIの関数を実行
        serverAPI.initServer();
    }
}
const main = new Main();
//# sourceMappingURL=app.js.map