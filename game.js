let score = {
  player1: 0,
  player2: 0
}
let setWinner = []

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
      score.player1 = 0
      score.player2 = 0
      module.exports.setWinner = setWinner
      checkMatchWinner()
    }
  }
}

function checkMatchWinner () {
  if (setWinner.length >= 2) {
    if (setWinner.filter(player => player === 'player 1').length >= 2) {
      module.exports.gameWinner = 'player 1'
      module.exports.setWinner = []
    }
    if (setWinner.filter(player => player === 'player 2').length >= 2) {
      module.exports.gameWinner = 'player 2'
      module.exports.setWinner = []
    }
  }
}

function reset () {
  setWinner = []
  module.exports.setWinner = []
  score.player1 = 0
  score.player2 = 0
  module.exports.gameWinner = undefined
}

module.exports = {
  score: score,
  givePoint: givePoint,
  setWinner: setWinner,
  reset: reset
}
