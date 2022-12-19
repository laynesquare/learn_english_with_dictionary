import getPassageRoute from './routes/passages.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

dotenv.config();
app.use(cors());

app.use('/getPassages', getPassageRoute);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
