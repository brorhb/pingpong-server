let score = {
  player1: 0,
  player2: 0
}
let setWinner = []
var gameWinner = ''

function givePoint (player) {
  if (player === 1) {
    score.player1++
  } else {
    score.player2++
  }
  checkSetWinner(score.player1, score.player2)
}

function checkSetWinner (player1, player2) {
  if (player1 >= 11 || player2 >= 11) {
    if (player1 - player2 >= 2 || player2 - player1 >= 2) {
      if (player1 > player2) setWinner.push('player 1')
      if (player2 > player1) setWinner.push('player 2')
      console.log(setWinner)
      score.player1 = 0
      score.player2 = 0
      checkMatchWinner()
    }
  }
}

function checkMatchWinner () {
  if (setWinner.length >= 2) {
    if (setWinner.filter(player => player === 'player 1').length >= 2) {
      gameWinner = 'player 1'
    }
    if (setWinner.filter(player => player === 'player 2').length >= 2) {
      gameWinner = 'player 2'
    }
    console.log(gameWinner)
  }
}

module.exports = {
  score: score,
  givePoint: givePoint,
  setWinner: setWinner,
  gameWinner: gameWinner
}
