import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

class BodyValidationMiddleware {
  verifyBodyFieldsErrors(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).send({ errors: errors.array() });
    }
    next();
  }
}

export default new BodyValidationMiddleware();
