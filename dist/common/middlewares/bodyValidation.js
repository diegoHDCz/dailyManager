"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class BodyValidationMiddleware {
    verifyBodyFieldsErrors(request, response, next) {
        const errors = (0, express_validator_1.validationResult)(request);
        if (!errors.isEmpty()) {
            return response.status(400).send({ errors: errors.array() });
        }
        next();
    }
}
exports.default = new BodyValidationMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9keVZhbGlkYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL21pZGRsZXdhcmVzL2JvZHlWYWxpZGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EseURBQXFEO0FBRXJELE1BQU0sd0JBQXdCO0lBQzVCLHNCQUFzQixDQUNwQixPQUFnQixFQUNoQixRQUFrQixFQUNsQixJQUFrQjtRQUVsQixNQUFNLE1BQU0sR0FBRyxJQUFBLG9DQUFnQixFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDckIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsSUFBSSxFQUFFLENBQUM7SUFDVCxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLHdCQUF3QixFQUFFLENBQUMifQ==