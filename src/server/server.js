import React from 'react'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router'
import Routes from '../client/components/Routes'
import express from 'express'
import path from 'path'
const port = process.argv[2] || 3000

const app = express()

const renderPage = (content) => (`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="favicon.ico">
        <title>F3 Nova</title>
        <link rel="stylesheet" href="/${manifest["main.css"]}" />
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/${manifest["main.js"]}"></script>
      </body>
    </html>
  `)


app.use('/static', express.static(path.join(__dirname, 'static')))

app.get('*', (req, res) => {

  const content = renderToString(
    <StaticRouter
      location={req.url}
      context={{}}>
      <Routes/>
    </StaticRouter>)

  res.send(renderPage(content))

})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
