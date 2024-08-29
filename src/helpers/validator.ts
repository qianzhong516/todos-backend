import { Request, Response, NextFunction } from 'express';

enum VALIDATION_SOURCE {
  BODY = 'body',
}

export function validator(
  schema: Zod.Schema,
  source: VALIDATION_SOURCE = VALIDATION_SOURCE.BODY
) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { success, error } = schema.safeParse(req[source]);
    if (success) {
      return next();
    }
    const message = error.errors.map((e) => e.message).join('; ');
    return next(new Error(message));
  };
}
