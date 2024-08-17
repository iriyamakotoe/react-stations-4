import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from '../src/CountUp'

const app = express()
const port = 9000

app.get('/', (req, res) => {
	const text = 'Hello, World!'
	const html = `
  <html>
    <head>
      <title>CountUp</title>
      <meta charset="utf-8"/>
    </head>
    <body>
      <div id="root">
	  ${text}
      </div>
    </body>
  </html>
`
	res.send(html)
})

app.use(express.static('./dist'))

app.listen(port, () => {
	console.log(`port ${port} でサーバー起動中`)
})
