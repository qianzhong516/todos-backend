import express, { Request, Response } from 'express';
import { PORT } from './config';

const app = express();

app.get('/', (request: Request, response: Response) => {
  return response.status(200).send('Hello World!!!');
});

app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});
