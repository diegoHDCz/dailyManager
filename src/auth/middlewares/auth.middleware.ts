import express from "express";
import usersService from "../../users/services/users.service";
import * as argon2 from "argon2";

class AuthMiddleware {
  constructor() {}
  async verifyPassword(
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) {
    const user: any = await usersService.getUserByEmailWithPassword(
      request.body.email
    );
    if (user) {
      const passwordHash = user.password;
      if (await argon2.verify(passwordHash, request.body.password)) {
        request.body = {
          userId: user._id,
          email: user.email,
          permissionFlags: user.permissionFlags,
        };
        return next();
      }
    }
    response.status(400).send({ errors: ["Invalid email and/or password"] });
  }
  
}
export default new AuthMiddleware();
