import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';


dotenv.config();

const app = express();

// Connect db and start server
app.get('/', (req, res) => {
  res.send('Hello from Aira\'s powerful server');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});