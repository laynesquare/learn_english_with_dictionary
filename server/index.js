import getPassageRoute from './routes/passages.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, optionsSuccessStatus: 200 }));

app.use('/getPassages', getPassageRoute);

app.use('/', (req, res) => {
  res.send('Welcome to Learn English with Dictionary API');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
