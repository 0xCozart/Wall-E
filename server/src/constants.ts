import dotenvSafe from 'dotenv';
import path from 'path';

dotenvSafe.config({
  path: path.resolve(__dirname, '..', '.env'),
});

export const {
  MONGODB_URL,
  OPENAI_API_KEY,
  CLOUD_API_KEY,
  CLOUD_CLOUD_NAME,
  CLOUD_API_SECRET,
} = <{[key: string]: string}>process.env;
