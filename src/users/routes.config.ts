import { CommonRoutesConfig } from "../common/routes.config";
import express, { NextFunction, Request, Response } from "express";

export class UsersRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "UsersRoutes");
  }
  configureRoutes(): express.Application {
    this.app
      .route(`/users`)
      .get((request: Request, response: Response) => {
        response.status(200).send("List of users");
      })
      .post((request: Request, response: Response) => {
        response.status(200).send("Post to users");
      });

    this.app
      .route("/user/:userId")
      .all((request: Request, response: Response, next: NextFunction) => {
        /**middleware code */
        next();
      })
      .get((request: Request, response: Response) => {
        response
          .status(200)
          .send(`GET requested user by id ${request.params.userId}`);
      })
      .put((request: Request, response: Response) => {
        response
          .status(200)
          .send(`PUT requested user by id ${request.params.userId}`);
      })
      .patch((request: Request, response: Response) => {
        response
          .status(200)
          .send(`PATCH requested user by id ${request.params.userId}`);
      })
      .delete((request: Request, response: Response) => {
        response
          .status(200)
          .send(`DELETE requested user by id ${request.params.userId}`);
      });

    return this.app;
  }
}
