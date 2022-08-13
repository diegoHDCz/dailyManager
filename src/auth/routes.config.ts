import { Application } from "express";
import { body } from "express-validator";
import bodyValidation from "../common/middlewares/bodyValidation";
import { CommonRoutesConfig } from "../common/routes.config";
import authController from "./controller/auth.controller";
import authMiddleware from "./middlewares/auth.middleware";
import jwtMiddleware from "./middlewares/jwt.middleware";

export class AuthRoutes extends CommonRoutesConfig {
  constructor(app: Application) {
    super(app, "AuthRoutes");
  }

  configureRoutes(): Application {
    this.app.post("/auth", [
      body("email").isEmail(),
      body("password").isString(),
      bodyValidation.verifyBodyFieldsErrors,
      authMiddleware.verifyPassword,
      authController.createJWT,
    ]);
    this.app.post(`/auth/refresh-token`, [
      jwtMiddleware.validJWTNeeded,
      jwtMiddleware.verifyRefreshBodyField,
      jwtMiddleware.validRefreshNeeded,
      authController.createJWT,
    ]);
    return this.app;
  }
}
