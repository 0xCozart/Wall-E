import * as dotenv from 'dotenv';

import {MONGODB_URL} from './constants';
import connectDB from './mongodb/connect';
import cors from 'cors';
import express from 'express';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('api/v1/post', postRoute);
app.use('api/v1/dalle', dalle);

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
