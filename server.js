'use strict'

const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/public/index.html')
})

io.on('connection', (client) => {
  console.log('Client connected...')

  client.on('join', (data) => {
    console.log(data)
  })

  client.on('messages', (data) => {
    client.emit('thread', data)
    client.broadcast.emit('thread', data)
  })
})

server.listen(8000)
