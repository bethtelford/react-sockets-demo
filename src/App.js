import React, { Component } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io();

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      message: '',
      room: 0,
      joined: false
    }
    socket.on('message dispatched', data => {
      this.updateMessage(data);
    })
    // EVERYONE IN ROOM
    // socket.on('room joined', data => {
    //   this.joinSuccess()
    // })

    this.updateMessage = this.updateMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    // EVERYONE IN ROOM
    // this.joinRoom = this.joinRoom.bind(this);
    // this.joinSuccess = this.joinSuccess.bind(this);
  }
  updateMessage(message) {
    console.log(message)
    this.setState({
      message
    })
  }

  // EVERYONE 
  sendMessage() {
    socket.emit('message sent', {
      message: this.state.input
    })
  }
  
  // EVERYONE BUT ME
  // sendMessage() {
  //   socket.emit('message sent', {
  //     message: this.state.input
  //   })
  //   this.setState({
  //     message: this.state.input
  //   })
  // }

  // EVERYONE IN ROOM
  // sendMessage() {
  //   socket.emit('message sent', {
  //     message: this.state.input,
  //     room: this.state.room
  //   })
  // }
  // joinRoom() {
  //   socket.emit('join room', {
  //     room: this.state.room
  //   })
  // }
  // joinSuccess() {
  //   this.setState({
  //     joined: true
  //   })
  // }
  render() {
    return (
      // EVERYONE AND EVERYONE BUT ME
      <div className="App">
        <h1>{this.state.message}</h1>
        <input value={this.state.input} onChange={e => {
          this.setState({
            input: e.target.value
          })
        }} />
        <button onClick={this.sendMessage}>Send</button>
      </div>

      // EVERYONE IN ROOM 
    //   <div className="App">
    //   <h1>{this.state.message}</h1>
    //   <input value={this.state.room} onChange={e => {
    //     this.setState({
    //       room: e.target.value
    //     })
    //   }} />
    //   <button onClick={this.joinRoom}>Join</button>
    //   {this.state.joined
    //   ?
    //   <div>
    //   <input value={this.state.input} onChange={e => {
    //     this.setState({
    //       input: e.target.value
    //     })
    //   }} />
    //   <button onClick={this.sendMessage}>Send</button>
    //   </div>
    //   :
    //   null
    //   }
    // </div>
    );
  }
}

export default App;
