const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes.js');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: '*' }
});

app.use(cors());
app.use(express.json());
app.use('/api/orders', orderRoutes);



io.on('connection', (socket) => {
  console.log('Admin connected');
});

app.set('socketio', io);

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});