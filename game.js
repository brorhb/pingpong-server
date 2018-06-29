let score = {
  player1: 0,
  player2: 0
}

function givePoint (player) {
  if (player === 1) {
    score.player1++
  } else {
    score.player2++
  }
}

module.exports = {
  score: score,
  givePoint: givePoint
}
