import express, { NextFunction, Request, Response } from 'express';
import { env, PORT } from './config';
// initialize database
import './database';
import router from './routes';
import { ApiError, InternalError } from './core/ApiError';

const app = express();
app.use(express.json());
app.use('/', router);

app.get('/', (request: Request, response: Response) => {
  return response.status(200).send('Hello World!');
});

// error middleware handler
app.use(
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
      return ApiError.handle(err, res);
    } else {
      if (env === 'development') {
        return res.status(500).send(err);
      }
      // do not expose sensitive error data in production
      return ApiError.handle(new InternalError(), res);
    }
  }
);

app.listen(PORT, () => {
  console.log(`Server is listening to port: ${PORT}`);
});
