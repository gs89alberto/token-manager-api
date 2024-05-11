import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../common/exception';
import { HTTP_RESPONSE_CODE } from '../common/constant';

function errorMiddleware(
  err: HttpException,
  _request: Request,
  response: Response,
  _next: NextFunction,
) {
  const status = err.status ?? HTTP_RESPONSE_CODE.SERVER_ERROR;
  const message =
    status === 500 ? 'Something went wrong, try again later' : err.message;

  response.status(status).send({ error: message });
}

export default errorMiddleware;
