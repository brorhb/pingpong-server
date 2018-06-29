const express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('[{title: "Hello"}, {title: "world"}]').json()
})

app.listen(8080)
