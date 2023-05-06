import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

// DB
import connectDB from './db.js';


dotenv.config();

const app = express();

// Connect db and start server
app.get('/', (req, res) => {
  res.send('Hello from Aira\'s powerful server');
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
