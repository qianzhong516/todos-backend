import { Response } from 'express';

enum ResponseStatus {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

export abstract class ApiResponse {
  constructor(
    protected statusCode: ResponseStatus,
    protected message: string
  ) {}

  send(res: Response) {
    return res.status(this.statusCode).json(this.sanitize());
  }

  sanitize() {
    const copy = {} as Record<string, any>;
    Object.entries(this).forEach(([key, val]) => {
      if (val != null && key !== 'statusCode') {
        copy[key] = val;
      }
    });
    return copy;
  }
}

export class BadRequestErrorResponse extends ApiResponse {
  constructor(
    message: string,
    statusCode = ResponseStatus.BAD_REQUEST
  ) {
    super(statusCode, message);
  }
}

export class NotFoundErrorResponse extends ApiResponse {
  constructor(
    message: string,
    statusCode = ResponseStatus.NOT_FOUND
  ) {
    super(statusCode, message);
  }
}

export class InternalErrorResponse extends ApiResponse {
  constructor(
    message: string,
    statusCode = ResponseStatus.INTERNAL_ERROR
  ) {
    super(statusCode, message);
  }
}
