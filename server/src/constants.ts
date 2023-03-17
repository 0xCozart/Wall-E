import dotenvSafe from 'dotenv';
import path from 'path';

dotenvSafe.config({
  path: path.resolve(__dirname, '..', '.env'),
});

export const {MONGODB_URL, OPENAI_API_KEY} = <{[key: string]: string}>(
  process.env
);
