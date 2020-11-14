import * as http from "http";

class Main {
  constructor() {
    // httpサーバーを設定する
    const server: http.Server = http.createServer(
      (request: http.IncomingMessage, response: http.ServerResponse) =>
        this.requestHandler(request, response)
    );
    // サーバーを起動してリクエストを待ち受け状態にする
    server.listen("5000");
    // ログを出力する
    console.log("http://localhost:5000 へアクセスください");
  }

  /**
   * サーバーにリクエストがあった時に実行される関数
   */
  private requestHandler(
    request: http.IncomingMessage,
    response: http.ServerResponse
  ): void {
    response.end("Hello! Node.js with TypeScript");
  }
}

new Main();
