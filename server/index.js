import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";

const app = express()
const port = 9000

app.get('/', (req, res) => {
  // AppコンポーネントをHTML文字列に変換
  const app = ReactDOMServer.renderToString(<App />);

  // HTMLに変換されたAppコンポーネントを埋め込んだHTMLを作成
  const html = `
        <html lang="en">
        <head>
            <script src="client.js" async defer></script>
        </head>
        <body>
            <div id="root">${app}</div>
        </body>
        </html>
    `;

  // コンポーネントが埋め込まれたHTMLをレスポンス
	res.send(html)
})

app.use(express.static('./dist'))

app.listen(port, () => {
	console.log(`port ${port} でサーバー起動中`)
})