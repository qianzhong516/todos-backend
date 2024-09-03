import { NextFunction, Request, Response } from 'express';

type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export function asyncHandler(executor: AsyncFunction) {
  return (req: Request, res: Response, next: NextFunction) => {
    executor(req, res, next).catch(next);
  };
}
