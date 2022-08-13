import debug from "debug";
import shortid from "shortid";
import mongooseService from "../../common/services/mongoose.service";
import { CreateUserDTO } from "../dtos/CreateUsersDTO";
import { PatchUserDTO } from "../dtos/PatchUsersDTO";
import { PutUserDto } from "../dtos/PutUsersDTO";

const log: debug.IDebugger = debug("app:user.dao-mongo");
class userDaoMongo {
  Schema = mongooseService.getMongoose().Schema;

  userSchema = new this.Schema(
    {
      _id: String,
      email: String,
      password: { type: String, select: false },
      firstName: String,
      lastName: String,
      permissionFlags: Number,
    },
    { id: false }
  );

  User = mongooseService.getMongoose().model("Users", this.userSchema);
  constructor() {
    log("Created new instance of DAO for db");
  }

  async addUser(userFields: CreateUserDTO) {
    const userId = shortid.generate();
    const user = new this.User({
      _id: userId,
      ...userFields,
      permissionFlags: 1,
    });
    await user.save();
    return userId;
  }

  async getUserByEmail(email: string) {
    return await this.User.findOne({ email: email }).exec();
  }
  async getUserById(userId: string) {
    try {
      return this.User.findOne({ _id: userId }).exec();
    } catch (err) {
      console.log(err);
    }
  }

  async getUsers(limit = 25, page = 0) {
    return await this.User.find()
      .limit(limit)
      .skip(limit * page)
      .exec();
  }
  async updateUserById(userId: string, userFields: PatchUserDTO | PutUserDto) {
    const existingUser = await this.User.findOneAndUpdate(
      { _id: userId },
      { $set: userFields },
      { new: true }
    ).exec();

    return existingUser;
  }

  async removeUserById(userId: string) {
    return await this.User.deleteOne({ _id: userId }).exec();
  }
  async getUserByEmailWithPassword(email: string) {
    return this.User.findOne({ email: email })
      .select("_id email permissionFlags +password")
      .exec();
  }
}
export default new userDaoMongo();
