var app = require('http').createServer(handler)
const ioHook = require('iohook')
var io = require('socket.io')(app)

var game = require('./game.js')

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

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
  io.emit('score', game.score)
})

io.on('connection', (io) => {
  console.log('connection')
})

app.listen(8080)
