<template>
  <div id="app" class="overflow-hidden">
    <h1>Pingpongscore - Live</h1>
    <span>Player 1: {{player1}}</span>
    <span>Player 2: {{player2}}</span>
  </div>
</template>

<script>
import socket from 'socket.io-client'

export default {
  data: () => ({
    player1: false,
    player2: false
  })
}
</script>
