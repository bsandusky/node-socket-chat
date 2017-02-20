'use strict'

const socket = io.connect('http://localhost:8000')

socket.on('connect', (data) => {
  socket.emit('join', 'Client connected to server')
})

socket.on('thread', (data) => {
  $('#thread').append('<li>' + data + '</li>')
})

$('form').submit(function(event){
  let message = $('#message').val()
  socket.emit('messages', message)
  this.reset()
  return false
})
