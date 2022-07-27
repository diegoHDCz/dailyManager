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
const users_service_1 = __importDefault(require("../services/users.service"));
const argon2_1 = require("argon2");
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)("app:users-controller");
class UserController {
    listUsers(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield users_service_1.default.list(100, 0);
            response.status(200).send(users);
        });
    }
    getUserById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.readById(request.body.id);
            response.status(200).send(user);
        });
    }
    createUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            request.body.password = yield (0, argon2_1.hash)(request.body.password);
            const userId = yield users_service_1.default.create(request.body);
            response.status(201).send(userId);
        });
    }
    patch(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = request.body;
            let { password } = request.body;
            if (password) {
                password = yield (0, argon2_1.hash)(password);
            }
            log(yield users_service_1.default.patchById(id, request.body));
            response.status(204).send();
        });
    }
    put(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            request.body.password = yield (0, argon2_1.hash)(request.body.password);
            log(yield users_service_1.default.putById(request.body.id, request.body));
            response.status(204).send();
        });
    }
    removeUser(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            log(yield users_service_1.default.deleteById(request.body.id));
            response.status(204).send();
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuY29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91c2Vycy9jb250cm9sbGVycy91c2Vycy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOEVBQXFEO0FBQ3JELG1DQUE4QjtBQUM5QixrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDM0QsTUFBTSxjQUFjO0lBQ1osU0FBUyxDQUFDLE9BQWdCLEVBQUUsUUFBa0I7O1lBQ2xELE1BQU0sS0FBSyxHQUFHLE1BQU0sdUJBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxPQUFnQixFQUFFLFFBQWtCOztZQUNwRCxNQUFNLElBQUksR0FBRyxNQUFNLHVCQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDMUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLE9BQWdCLEVBQUUsUUFBa0I7O1lBQ25ELE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sSUFBQSxhQUFJLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxRCxNQUFNLE1BQU0sR0FBRyxNQUFNLHVCQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFDSyxLQUFLLENBQUMsT0FBZ0IsRUFBRSxRQUFrQjs7WUFDOUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDNUIsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDaEMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osUUFBUSxHQUFHLE1BQU0sSUFBQSxhQUFJLEVBQUMsUUFBUSxDQUFDLENBQUM7YUFDakM7WUFDRCxHQUFHLENBQUMsTUFBTSx1QkFBWSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QixDQUFDO0tBQUE7SUFDSyxHQUFHLENBQUMsT0FBZ0IsRUFBRSxRQUFrQjs7WUFDNUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxJQUFBLGFBQUksRUFBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzFELEdBQUcsQ0FBQyxNQUFNLHVCQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQy9ELFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsQ0FBQztLQUFBO0lBQ0ssVUFBVSxDQUFDLE9BQWdCLEVBQUUsUUFBa0I7O1lBQ25ELEdBQUcsQ0FBQyxNQUFNLHVCQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNwRCxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlCLENBQUM7S0FBQTtDQUNGO0FBRUQsa0JBQWUsSUFBSSxjQUFjLEVBQUUsQ0FBQyJ9