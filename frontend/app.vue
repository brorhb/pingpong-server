<template>
  <div id="app" class="overflow-hidden flex items-center pt5 bg-near-white">
    <div class="pa4 bg-white br2 flex outline flex-column w-40 h5">
      <h1>Pingpongscore - Live</h1>
      <span>Player 1: {{player1}}</span>
      <span>Player 2: {{player2}}</span>
      <div :key="index" v-for="(winner, index) in setWinner">
        <span>Winner of set {{index + 1}}: {{winner}}</span>
      </div>
      <h3 v-if="gameWinner" class="gold">{{gameWinner}} winner winner chicken dinner</h3>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client'
const socket = io('http://localhost:8080/')

export default {
  data: () => ({
    player1: 0,
    player2: 0,
    setWinner: [],
    gameWinner: ''
  }),
  created () {
    socket.on('score', (data) => {
      this.player1 = data.player1
      this.player2 = data.player2
    })
    socket.on('setWinner', (data) => {
      this.setWinner = data
    })
    socket.on('gameWinner', (data) => {
      console.log(data)
      this.gameWinner = data
    })
  }
}
</script>
