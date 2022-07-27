import usersDAO from "../in-memory/database/usersDAO";
import { CRUD } from "../../common/crud.interface";
import { CreateUserDTO } from "../dtos/CreateUsersDTO";
import { PatchUserDTO } from "../dtos/PatchUsersDTO";
import { PutUserDto } from "../dtos/PutUsersDTO";

class UsersService implements CRUD {
  async create(resource: CreateUserDTO) {
    return usersDAO.addUser(resource);
  }

  async deleteById(id: string) {
    return usersDAO.removeUserById(id);
  }

  async list(limit: number, page: number) {
    return usersDAO.getUsers();
  }

  async patchById(id: string, resource: PatchUserDTO) {
    return usersDAO.patchUserById(id, resource);
  }

  async readById(id: string) {
    return usersDAO.getUserById(id);
  }

  async putById(id: string, resource: PutUserDto) {
    return usersDAO.patchUserById(id, resource);
  }

  async getUserByEmail(email: string) {
    return usersDAO.getUserByEmail(email);
  }
}
export default new UsersService();
