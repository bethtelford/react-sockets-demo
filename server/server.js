const express = require('express'),
  bodyParser = require('body-parser'),
  socket = require('socket.io');

const app = express();

app.use(bodyParser.json());

// REGULAR ENDPOINTS HERE
app.get('/api/example', (req, res, next) => {
  res.status(200).send('hello')
})

const PORT = 4000;
const io = socket(app.listen(PORT, () => console.log(`Housten we have lift off on port ${PORT}`)));

io.on('connection', socket => {
  console.log('User Connected');
  // io.emit('message dispatched', 'hello');
  // EVERYONE
  socket.on('message sent', data => {
    console.log(data)
    io.emit('message dispatched', data.message);
  })


  //  EVERYONE BUT ME
  // socket.on('message sent', data => {
  //   console.log(data)
  //   socket.broadcast.emit('message dispatched', data.message);
  // })

  
  // EVERYONE IN THE ROOM
  // socket.on('join room', data => {
  //   console.log('Room joined', data.room)
  //   socket.join(data.room);
  //   io.to(data.room).emit('room joined');
  // })
  // socket.on('message sent', data => {
  //   io.to(data.room).emit('message dispatched', data.message);
  // })

  socket.on('disconnect', () => {
    console.log('User Disconnected');
  })
});