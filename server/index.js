import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import CountUp from '../src/CountUp.jsx'

const app = express()
const port = 9000

app.get('/', (req, res) => {
	const app = ReactDOMServer.renderToString(<CountUp />)
	const html = `
  <html>
    <head>
      <title>CountUp</title>
      <meta charset="utf-8"/>
      <script src="./client.js" defer></script>
    </head>
    <body>
      <div id="root">
	  ${app}
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
