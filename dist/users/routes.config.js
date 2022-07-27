"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const routes_config_1 = require("../common/routes.config");
const users_controller_1 = __importDefault(require("./controllers/users.controller"));
const users_middlewares_1 = __importDefault(require("./middlewares/users.middlewares"));
class UsersRoutes extends routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "UsersRoutes");
    }
    configureRoutes() {
        this.app
            .route(`/users`)
            .get(users_controller_1.default.listUsers)
            .post(users_middlewares_1.default.validateRequiredUserBodyFields, users_middlewares_1.default.validateSameEmailDoesntExist, users_controller_1.default.createUser);
        this.app.param(`userId`, users_middlewares_1.default.extractUserId);
        this.app
            .route(`/users/:userId`)
            .all(users_middlewares_1.default.validateUserExists)
            .get(users_controller_1.default.getUserById)
            .delete(users_controller_1.default.removeUser);
        this.app.put(`/users/:userId`, [
            users_middlewares_1.default.validateRequiredUserBodyFields,
            users_middlewares_1.default.validateSameEmailBelongToSameUser,
            users_controller_1.default.put,
        ]);
        this.app.patch(`/users/:userId`, [
            users_middlewares_1.default.validatePatchEmail,
            users_controller_1.default.patch,
        ]);
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2Vycy9yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDJEQUE2RDtBQUM3RCxzRkFBNkQ7QUFDN0Qsd0ZBQThEO0FBRzlELE1BQWEsV0FBWSxTQUFRLGtDQUFrQjtJQUNqRCxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxRQUFRLENBQUM7YUFDZixHQUFHLENBQUMsMEJBQWUsQ0FBQyxTQUFTLENBQUM7YUFDOUIsSUFBSSxDQUNILDJCQUFlLENBQUMsOEJBQThCLEVBQzlDLDJCQUFlLENBQUMsNEJBQTRCLEVBQzVDLDBCQUFlLENBQUMsVUFBVSxDQUMzQixDQUFDO1FBRUosSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLDJCQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsZ0JBQWdCLENBQUM7YUFDdkIsR0FBRyxDQUFDLDJCQUFlLENBQUMsa0JBQWtCLENBQUM7YUFDdkMsR0FBRyxDQUFDLDBCQUFlLENBQUMsV0FBVyxDQUFDO2FBQ2hDLE1BQU0sQ0FBQywwQkFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFO1lBQzdCLDJCQUFlLENBQUMsOEJBQThCO1lBQzlDLDJCQUFlLENBQUMsaUNBQWlDO1lBQ2pELDBCQUFlLENBQUMsR0FBRztTQUNwQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtZQUMvQiwyQkFBZSxDQUFDLGtCQUFrQjtZQUNsQywwQkFBZSxDQUFDLEtBQUs7U0FDdEIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQW5DRCxrQ0FtQ0MifQ==