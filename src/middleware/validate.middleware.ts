import { NextFunction, Request, Response } from 'express';
import { Result, ValidationError, validationResult } from 'express-validator';

const validate = (validations: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(
      validations.map((validation: any) => validation.run(req)),
    );
    const errors: Result<ValidationError> = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    const response = errors.array().map((error) => {
      return {
        detail: error.msg,
      };
    });
    res.status(400).json({ errors: response });
  };
};

export default validate;
