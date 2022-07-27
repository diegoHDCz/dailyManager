import { Request, Response } from "express";
import usersService from "../services/users.service";
import { hash } from "argon2";
import debug from "debug";

const log: debug.IDebugger = debug("app:users-controller");
class UserController {
  async listUsers(request: Request, response: Response) {
    const users = await usersService.list(100, 0);
    response.status(200).send(users);
  }

  async getUserById(request: Request, response: Response) {
    const user = await usersService.readById(request.body.id);
    response.status(200).send(user);
  }

  async createUser(request: Request, response: Response) {
    request.body.password = await hash(request.body.password);
    const userId = await usersService.create(request.body);
    response.status(201).send(userId);
  }
  async patch(request: Request, response: Response) {
    const { id } = request.body;
    let { password } = request.body;
    if (password) {
      password = await hash(password);
    }
    log(await usersService.patchById(id, request.body));
    response.status(204).send();
  }
  async put(request: Request, response: Response) {
    request.body.password = await hash(request.body.password);
    log(await usersService.putById(request.body.id, request.body));
    response.status(204).send();
  }
  async removeUser(request: Request, response: Response) {
    log(await usersService.deleteById(request.body.id));
    response.status(204).send();
  }
}

export default new UserController();
