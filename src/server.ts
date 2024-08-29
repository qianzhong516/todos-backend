import express, { NextFunction, Request, Response } from 'express';
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

// error middleware handler
app.use(
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(400).send(err.message);
  }
);

app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});
