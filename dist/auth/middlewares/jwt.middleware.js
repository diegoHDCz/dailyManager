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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const crypto_1 = __importDefault(require("crypto"));
const users_service_1 = __importDefault(require("../../users/services/users.service"));
// @ts-expect-error
const jwtSecret = process.env.JWT_SECRET;
class JwtMiddleware {
    verifyRefreshBodyField(req, res, next) {
        if (req.body && req.body.refreshToken) {
            return next();
        }
        else {
            return res
                .status(400)
                .send({ errors: ["Missing required field: refreshToken"] });
        }
    }
    validRefreshNeeded(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield users_service_1.default.getUserByEmailWithPassword(res.locals.jwt.email);
            const salt = crypto_1.default.createSecretKey(Buffer.from(res.locals.jwt.refreshKey.data));
            const hash = crypto_1.default
                .createHmac("sha512", salt)
                .update(res.locals.jwt.userId + jwtSecret)
                .digest("base64");
            console.log(req.body.refreshToken);
            if (hash === req.body.refreshToken) {
                req.body = {
                    userId: user._id,
                    email: user.email,
                    permissionFlags: user.permissionFlags,
                };
                return next();
            }
            else {
                return res.status(400).send({ errors: ["Invalid refresh token"] });
            }
        });
    }
    validJWTNeeded(req, res, next) {
        if (req.headers["authorization"]) {
            try {
                const authorization = req.headers["authorization"].split(" ");
                if (authorization[0] !== "Bearer") {
                    return res.status(401).send();
                }
                else {
                    res.locals.jwt = jsonwebtoken_1.default.verify(authorization[1], jwtSecret);
                    next();
                }
            }
            catch (err) {
                return res.status(403).send();
            }
        }
        else {
            return res.status(401).send();
        }
    }
}
exports.default = new JwtMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiand0Lm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYXV0aC9taWRkbGV3YXJlcy9qd3QubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGdFQUErQjtBQUMvQixvREFBNEI7QUFFNUIsdUZBQThEO0FBRTlELG1CQUFtQjtBQUNuQixNQUFNLFNBQVMsR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztBQUVqRCxNQUFNLGFBQWE7SUFDakIsc0JBQXNCLENBQ3BCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCO1FBRTFCLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQyxPQUFPLElBQUksRUFBRSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLE9BQU8sR0FBRztpQkFDUCxNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNYLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLHNDQUFzQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQztJQUVLLGtCQUFrQixDQUN0QixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxJQUFJLEdBQVEsTUFBTSx1QkFBWSxDQUFDLDBCQUEwQixDQUM3RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQ3JCLENBQUM7WUFDRixNQUFNLElBQUksR0FBRyxnQkFBTSxDQUFDLGVBQWUsQ0FDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQzVDLENBQUM7WUFDRixNQUFNLElBQUksR0FBRyxnQkFBTTtpQkFDaEIsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7aUJBQzFCLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2lCQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBQ3BDLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNsQyxHQUFHLENBQUMsSUFBSSxHQUFHO29CQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRztvQkFDaEIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO29CQUNqQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7aUJBQ3RDLENBQUM7Z0JBQ0YsT0FBTyxJQUFJLEVBQUUsQ0FBQzthQUNmO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUNwRTtRQUNILENBQUM7S0FBQTtJQUVELGNBQWMsQ0FDWixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjtRQUUxQixJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDaEMsSUFBSTtnQkFDRixNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUNqQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQy9CO3FCQUFNO29CQUNMLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLHNCQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQVEsQ0FBQztvQkFDaEUsSUFBSSxFQUFFLENBQUM7aUJBQ1I7YUFDRjtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNaLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMvQjtTQUNGO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLGFBQWEsRUFBRSxDQUFDIn0=