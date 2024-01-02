const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const connectDB = require('./Configuration/db');
const apiRouter = require('./routers/api');
const cors = require('cors');
const socketIo = require('socket.io');
const app = express();
const ioIsAuthenticated = require('./middlewares/ioIsAuthenticated');
const { ioRegisterEvents, ioConnectionNotifications } = require('./Configuration/ioEvents');

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.static('./images'));
app.use(express.static(path.join(__dirname, 'build')));
app.use('/api', apiRouter);

// Route for serving the React app
app.get("/*", (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'build') });
});

// Connect to the database
connectDB()
  .then(() => {
    const server = app.listen(5000, () => {
      console.log('Server is up on port 5000');
    });

    const io = socketIo(server, {
      cors: 'http://localhost:3000'
    });

    app.locals.io = io;

    const onConnection = async (socket) => {
      console.log('User connected via socket.io');
      socket.join(socket.userId);
      ioRegisterEvents(io, socket);
      await ioConnectionNotifications(io, socket);
    };

    io.use(ioIsAuthenticated);
    io.on('connection', onConnection);

    mongoose.connection.once('open', () => {
      console.log("Database connected");
    });
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
    // Handle the error appropriately, maybe exit the app or retry the connection
  });


