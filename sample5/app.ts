import { ServerAPI } from "./serverModule";

class Main {
  constructor() {
    // serverModuleの中のServerAPIクラスのインスタンスを作成
    const serverAPI = new ServerAPI();
    // ServerAPIの関数を実行
    serverAPI.initServer();
  }
}

new Main();
