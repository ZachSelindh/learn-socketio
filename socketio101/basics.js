// We need http bc we aren't using express
const http =  require('http');
// We need socketio.io, it's 3rd party!
const socketio = require('socket.io');

// We make an http server with node
const server =  http.createServer((req, res) => {
    res.end("I am connected")
});

const io = socketio(server);

io.on('connection', (socket, req) => {
    // ws.send -> socket.emit
    socket.emit('welcome', "Welcome to the websocket server!");
    socket.on('message', (msg) => {
        console.log(msg)
    });
});

server.listen(8000);