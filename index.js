const express = require('express')
const ioHook = require('iohook')
var game = require('./game.js')
var app = express()
var WebSocketServer = require('websocket').server

var serverConfig = {httpServer: app, path: '/', keepalive: true}

var ws = new WebSocketServer(serverConfig)

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9988')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

ioHook.start()
ioHook.on('keyup', (key) => {
  if (key.rawcode === 49) {
    game.score.player1 = 0
    game.score.player2 = 0
  } else if (key.rawcode === 37) {
    game.givePoint(1)
  } else if (key.rawcode === 15) {
    game.givePoint(2)
  }
})

ws.on('connect', (req) => {
  console.log(req)
})

app.get('/', (req, res) => {
  ws.mount(serverConfig)
})

app.listen(8080)
