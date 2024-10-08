import express, { NextFunction, Request, Response } from 'express';
import { env } from './config';
import routes from './routes';
import {
  ApiError,
  InternalError,
  NotFoundError,
} from './core/ApiError';
import swaggerSpec from './swagger.json';
import swaggerUi from 'swagger-ui-express';

const app = express();
app.use(express.json());
app.use('/', routes);
if (env === 'development') {
  // swagger docs
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/docs.json', (req, res) => {
    res.json(swaggerSpec);
  });
}

// catch 404 and forward to error handler
app.use((req, res, next) => next(new NotFoundError()));

// error middleware handler
app.use(
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
      return ApiError.handle(err, res);
    } else {
      if (env === 'development') {
        return ApiError.handle(new InternalError(err.message), res);
      }
      // do not expose sensitive error data in production
      return ApiError.handle(new InternalError(), res);
    }
  }
);

export default app;
