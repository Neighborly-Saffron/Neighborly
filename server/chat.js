const uuidv4 = require('uuid').v4;

async function authHandler(socket, next) {
  // const user = await oktaClient.getUser(sub);
  // const name = socket.request.name;
  // console.log('socket handshake: ', socket.request)

  // users.set(socket, {
  //   name: name,
  // });
  next();
}

const messages = new Set();
const users = new Map();

const defaultUser = {
  id: 'anon',
  name: 'Anonymous',
};

const messageExpirationTimeMS = 5*60 * 2000; // 10 min

class Connection {
  constructor(io, socket) {
    this.socket = socket;
    this.io = io;

    socket.on('getMessages', () => this.getMessages());
    socket.on('message', (value) => this.handleMessage(value));
    socket.on('disconnect', () => this.disconnect());
    socket.on('connect_error', (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
  }

  sendMessage(message) {
    this.io.sockets.emit('message', message);
  }

  getMessages() {
    messages.forEach((message) => this.sendMessage(message));
  }

  handleMessage(value) {
    console.log('message value: ', value)
    console.log('message name: ', value.name)

    const message = {
      id: uuidv4(),
      user: value.name || defaultUser,
      value: value.value,
      time: Date.now()
    };

    messages.add(message);
    this.sendMessage(message);

    setTimeout(
      () => {
        messages.delete(message);
        this.io.sockets.emit('deleteMessage', message.id);
      },
      messageExpirationTimeMS,
    );
  }

  disconnect() {
    users.delete(this.socket);
  }
}

function chat(io) {
  io.on('connection', (socket) => {
    io.use(authHandler);
    // console.log(socket.handshake)
    new Connection(io, socket);
  });
};

module.exports = chat;