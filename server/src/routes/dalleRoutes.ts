import {Configuration, OpenAIApi} from 'openai';

import {OPENAI_API_KEY} from '../constants';
import express from 'express';

const router = express.Router();

const configuration = new Configuration({apiKey: OPENAI_API_KEY});
const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.send('herro');
});

export default router;
