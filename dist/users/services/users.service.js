"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersDAO_1 = __importDefault(require("../in-memory/database/usersDAO"));
class UsersService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return usersDAO_1.default.addUser(resource);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return usersDAO_1.default.removeUserById(id);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return usersDAO_1.default.getUsers();
        });
    }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return usersDAO_1.default.patchUserById(id, resource);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return usersDAO_1.default.getUserById(id);
        });
    }
    putById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return usersDAO_1.default.patchUserById(id, resource);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return usersDAO_1.default.getUserByEmail(email);
        });
    }
}
exports.default = new UsersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91c2Vycy9zZXJ2aWNlcy91c2Vycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXNEO0FBTXRELE1BQU0sWUFBWTtJQUNWLE1BQU0sQ0FBQyxRQUF1Qjs7WUFDbEMsT0FBTyxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsRUFBVTs7WUFDekIsT0FBTyxrQkFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDO0tBQUE7SUFFSyxJQUFJLENBQUMsS0FBYSxFQUFFLElBQVk7O1lBQ3BDLE9BQU8sa0JBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixDQUFDO0tBQUE7SUFFSyxTQUFTLENBQUMsRUFBVSxFQUFFLFFBQXNCOztZQUNoRCxPQUFPLGtCQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5QyxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsRUFBVTs7WUFDdkIsT0FBTyxrQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxDQUFDO0tBQUE7SUFFSyxPQUFPLENBQUMsRUFBVSxFQUFFLFFBQW9COztZQUM1QyxPQUFPLGtCQUFRLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM5QyxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsS0FBYTs7WUFDaEMsT0FBTyxrQkFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7Q0FDRjtBQUNELGtCQUFlLElBQUksWUFBWSxFQUFFLENBQUMifQ==