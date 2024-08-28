import express, { Request, Response } from 'express';
import { PORT } from './config';
// initialize database
import './database';
import router from './routes';

const app = express();
app.use(express.json());
app.use('/', router);

app.get('/', (request: Request, response: Response) => {
  return response.status(200).send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});
