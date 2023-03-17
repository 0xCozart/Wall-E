import * as dotenv from 'dotenv';

import {MONGODB_URL} from './constants';
import connectDB from './mongodb/connect';
import cors from 'cors';
import dalleRoute from './routes/dalleRoutes';
import express from 'express';
import postRoute from './routes/postRoutes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/api/v1/post', postRoute);
app.use('/api/v1/dalle', dalleRoute);

app.get('/', async (req, res) => {
  res.send('Henlo!');
});

const server = async () => {
  try {
    connectDB(MONGODB_URL);
    app.listen(8080, () =>
      console.log('Server has started on port: http://localhost:8080')
    );
  } catch (error) {
    console.error(error);
  }
};

server();
