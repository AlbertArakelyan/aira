import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

// DB
import connectDB from './db.js';

// Routers
import userRouter from './routes/user.js';
import summaryRouter from './routes/summary.js';


dotenv.config();

const app = express();

// Global usages
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/v1/user', userRouter);
app.use('/api/v1/summary', summaryRouter);

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
