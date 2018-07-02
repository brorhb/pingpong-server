<template>
  <div id="app" class="overflow-hidden">
    <h1>Pingpongscore - Live</h1>
    <span>Player 1: {{player1}}</span>
    <span>Player 2: {{player2}}</span>
    <span>Set winner: {{setWinner}}</span>
    <h3>{{gameWinner}}</h3>
  </div>
</template>

<script>
import io from 'socket.io-client'
const socket = io('http://localhost:8080/')

export default {
  data: () => ({
    player1: 0,
    player2: 0,
    setWinner: '',
    gameWinner: ''
  }),
  created () {
    socket.on('score', (data) => {
      this.player1 = data.player1
      this.player2 = data.player2
    })
    socket.on('setWinner', (data) => {
      this.setWinner = data[data.length - 1]
    })
    socket.on('gameWinner', (data) => {
      console.log(data)
      this.gameWinner = data
    })
  }
}
</script>
