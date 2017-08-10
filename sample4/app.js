"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// httpモジュールの読み込み
const http = require("http");
// fsモジュールの読み込み
const fs = require("fs");
// pathモジュールの読み込み
const path = require("path");
class Main {
    constructor() {
        this._rootFolder = '/'; // ルートフォルダを指定
        const server = http.createServer((request, response) => this.requestListener(request, response));
        server.listen((process.env.PORT || 5000), () => this.listenHandler());
    }
    /**
     * httpサーバーが待ち受け状態になった時に実行される関数
     */
    listenHandler() {
        console.log((process.env.PORT || 5000) + 'でhttpサーバーが待ち受け状態です');
    }
    /**
     * サーバーにリクエストがあった際に実行される関数
     */
    requestListener(request, response) {
        // リクエストがあったファイル
        let requestURL = request.url;
        // リクエストのあったファイルの拡張子を取得
        const extensionName = path.extname(requestURL);
        let contentType;
        let isBinary;
        // ファイルの拡張子に応じてルーティング処理
        if (extensionName != '') {
            switch (extensionName) {
                case '.html':
                    contentType = 'text/html';
                    isBinary = false;
                    break;
                case '.css':
                    contentType = 'text/css';
                    isBinary = false;
                    break;
                case '.js':
                case '.ts':
                    contentType = 'text/javascript';
                    isBinary = false;
                    break;
                case '.png':
                    contentType = 'image/png';
                    isBinary = true;
                    break;
                case '.jpg':
                    contentType = 'image/jpeg';
                    isBinary = true;
                    break;
                case '.gif':
                    contentType = 'image/gif';
                    isBinary = true;
                    break;
                case '.swf':
                    contentType = 'application/x-shockwave-flash';
                    isBinary = true;
                    break;
                default:
                    // どこにも該当しない場合は、index.htmlを読み込む
                    requestURL = 'index.html';
                    contentType = 'text/html';
                    isBinary = false;
                    break;
            }
        }
        else {
            // 拡張子が存在しない場合は、index.htmlを読み込む
            requestURL = 'index.html';
            contentType = 'text/html';
            isBinary = false;
        }
        this.readFileHandler(requestURL, contentType, isBinary, response);
    }
    /**
     * ファイルの読み込み処理
     */
    readFileHandler(fileName, contentType, isBinary, response) {
        const filePath = __dirname + this._rootFolder + fileName; // ファイルの場所
        // filePathが存在するかどうかを調べる。存在している場合はexistにtrueが入る。
        fs.exists(filePath, (exist) => this.responseHandler(exist, filePath, contentType, isBinary, response));
    }
    /**
     * レスポンスを返す処理
     */
    responseHandler(exist, filePath, contentType, isBinary, response) {
        if (exist) {
            // ファイルを読み込む際のエンコード指定
            const encoding = !isBinary ? 'utf8' : 'binary';
            // ファイルの読み込み
            fs.readFile(filePath, { encoding: encoding }, (error, data) => this.fileReadhandler(error, data, contentType, isBinary, response));
        }
        else {
            // ファイルが存在しない場合は400エラーを返す。
            response.statusCode = 400;
            response.end('400 Error');
        }
    }
    /**
     * ファイルの読み込みが完了した時に実行される処理
     */
    fileReadhandler(error, data, contentType, isBinary, response) {
        if (error) {
            response.statusCode = 500; // レスポンスデータにステータスコード500を設定
            response.end('Internal Server Error');
        }
        else {
            response.statusCode = 200; // レスポンスデータにステータスコード200を設定
            response.setHeader('Content-Type', contentType); // レスポンスデータのヘッダーにContent-Typeを設定
            if (!isBinary) {
                response.end(data);
            }
            else {
                response.end(data, 'binary'); // バイナリーデータの場合はend()の第二引数に"binary"を指定
            }
        }
    }
}
const main = new Main();
//# sourceMappingURL=app.js.map