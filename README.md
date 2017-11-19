# Welcome to Sockets!

## In this repo I have set up three layers of complexity using sockets to send messages. 

- Everything with the comment EVERYONE is the basic set up of sockets that will send and receive messages to any client connected to the backend

- Everything with the comment EVERYONE BUT ME is the setup using broadcasts that will send messages to every client BUT the client that sent the message originally. This pattern is useful for increasing load times and user experience

- Everything with the comment EVERYONE IN THE ROOM is the setup using rooms within the socket. This is very useful in a scenario similar to managing chat rooms in a client.
