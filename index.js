import dotenv from 'dotenv';
import start from './src/server';

dotenv.config();
console.log('process.env.MONGO_URL: ', process.env.MONGO_URL);

const port = process.env.PORT || 3001;

start().listen(port, () => {
  console.log(`TODO list backend listening on port ${port}!`);
});
