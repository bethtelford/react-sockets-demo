const express = require('express'),
  bodyParser = require('body-parser'),
  socket = require('socket.io');

const app = express();

app.use(bodyParser.json());



const PORT = 4000;
const io = socket(app.listen(PORT, () => console.log(`Server listening on port ${PORT}`)));

io.on('connection', socket => {
  console.log('User Connected');
  
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