// Define the server port
const PORT = 3000;


// Set up the web server using Express
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Enable CORS for frontend access
const cors = require('cors');

// Set up server
const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: '*' }
});
io.on('connection', (socket) => {
  console.log('Admin connected');
});

app.set('socketio', io);



// Import API Routing 
const orderRoutes = require('./routes/orderRoutes.js');
app.use('/api/orders', orderRoutes);
const path = require('path');
app.use('/uploaded_Img', express.static(path.join(__dirname, 'uploaded_Img')));










// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});







