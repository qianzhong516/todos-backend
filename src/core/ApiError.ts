import {
  BadRequestErrorResponse,
  NotFoundErrorResponse,
  InternalErrorResponse,
} from './ApiResponse';
import { Response } from 'express';

enum ErrorType {
  BAD_REQUEST = 'badRequestError',
  NOT_FOUND = 'notFoundError',
  INTERNAL = 'internalError',
}

export abstract class ApiError extends Error {
  constructor(public type: ErrorType, public message: string) {
    super(message);
  }

  // send different error response based on the error type
  static handle(err: ApiError, res: Response) {
    switch (err.type) {
      case ErrorType.BAD_REQUEST:
        return new BadRequestErrorResponse(err.message).send(res);
      case ErrorType.NOT_FOUND:
        return new NotFoundErrorResponse(err.message).send(res);
      case ErrorType.INTERNAL:
        return new InternalErrorResponse(err.message).send(res);
      default:
        break;
    }
  }
}

export class BadRequestError extends ApiError {
  constructor(message = 'Bad Request') {
    super(ErrorType.BAD_REQUEST, message);
  }
}

export class NotFoundError extends ApiError {
  constructor(message = 'Not Found') {
    super(ErrorType.NOT_FOUND, message);
  }
}

export class InternalError extends ApiError {
  constructor(message = 'Internal Error') {
    super(ErrorType.INTERNAL, message);
  }
}
