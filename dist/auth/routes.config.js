"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_validator_1 = require("express-validator");
const bodyValidation_1 = __importDefault(require("../common/middlewares/bodyValidation"));
const routes_config_1 = require("../common/routes.config");
const auth_controller_1 = __importDefault(require("./controller/auth.controller"));
const auth_middleware_1 = __importDefault(require("./middlewares/auth.middleware"));
const jwt_middleware_1 = __importDefault(require("./middlewares/jwt.middleware"));
class AuthRoutes extends routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "AuthRoutes");
    }
    configureRoutes() {
        this.app.post("/auth", [
            (0, express_validator_1.body)("email").isEmail(),
            (0, express_validator_1.body)("password").isString(),
            bodyValidation_1.default.verifyBodyFieldsErrors,
            auth_middleware_1.default.verifyPassword,
            auth_controller_1.default.createJWT,
        ]);
        this.app.post(`/auth/refresh-token`, [
            jwt_middleware_1.default.validJWTNeeded,
            jwt_middleware_1.default.verifyRefreshBodyField,
            jwt_middleware_1.default.validRefreshNeeded,
            auth_controller_1.default.createJWT,
        ]);
        return this.app;
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRoL3JvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseURBQXlDO0FBQ3pDLDBGQUFrRTtBQUNsRSwyREFBNkQ7QUFDN0QsbUZBQTBEO0FBQzFELG9GQUEyRDtBQUMzRCxrRkFBeUQ7QUFFekQsTUFBYSxVQUFXLFNBQVEsa0NBQWtCO0lBQ2hELFlBQVksR0FBZ0I7UUFDMUIsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNyQixJQUFBLHdCQUFJLEVBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUEsd0JBQUksRUFBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDM0Isd0JBQWMsQ0FBQyxzQkFBc0I7WUFDckMseUJBQWMsQ0FBQyxjQUFjO1lBQzdCLHlCQUFjLENBQUMsU0FBUztTQUN6QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUNuQyx3QkFBYSxDQUFDLGNBQWM7WUFDNUIsd0JBQWEsQ0FBQyxzQkFBc0I7WUFDcEMsd0JBQWEsQ0FBQyxrQkFBa0I7WUFDaEMseUJBQWMsQ0FBQyxTQUFTO1NBQ3pCLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFyQkQsZ0NBcUJDIn0=