import shortid from "shortid";
import debug from "debug";
import { CreateUserDTO } from "../../dtos/CreateUsersDTO";
import { PutUserDto } from "../../dtos/PutUsersDTO";
import { PatchUserDTO } from "../../dtos/PatchUsersDTO";

const log: debug.IDebugger = debug("app:in-memory-dao");

class UsersDAO {
  users: Array<CreateUserDTO> = [];
  constructor() {
    log("Created new instance of DAO");
  }
  async getUsers() {
    return this.users;
}

  async addUser(user: CreateUserDTO) {
    user.id = shortid.generate();
    this.users.push(user);
    return user.id;
  }

  async getUserById(userId: string) {
    return this.users.find((user: { id: string }) => user.id === userId);
  }
  async updateUserById(userId: string, user: PutUserDto) {
    const objectIndex = this.users.findIndex(
      (obj: { id: string }) => obj.id === userId
    );

    this.users.splice(objectIndex, 1, user);
    return `${user.id} updated via put`;
  }

  async patchUserById(userId: string, user: PatchUserDTO) {
    const objIndex = this.users.findIndex(
      (obj: { id: string }) => obj.id === userId
    );
    let currentUser = this.users[objIndex];
    const allowedPatchFields = [
      "password",
      "firstName",
      "lastName",
      "permissionFlags",
    ];
    for (let field of allowedPatchFields) {
      if (field in user) {
        // @ts-ignore
        currentUser[field] = user[field];
      }
    }
    this.users.splice(objIndex, 1, currentUser);
    return `${user.id} patched`;
  }
  async removeUserById(userId: string) {
    const objIndex = this.users.findIndex(
      (obj: { id: string }) => obj.id === userId
    );
    this.users.splice(objIndex, 1);
    return `${userId} removed`;
  }
  async getUserByEmail(email: string) {
    const objIndex = this.users.findIndex(
      (obj: { email: string }) => obj.email === email
    );
    let currentUser = this.users[objIndex];
    if (currentUser) {
      return currentUser;
    } else {
      return null;
    }
  }
}

export default new UsersDAO();
