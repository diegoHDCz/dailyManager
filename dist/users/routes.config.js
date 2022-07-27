"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRoutes = void 0;
const routes_config_1 = require("../common/routes.config");
class UsersRoutes extends routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, "UsersRoutes");
    }
    configureRoutes() {
        this.app
            .route(`/users`)
            .get((request, response) => {
            response.status(200).send("List of users");
        })
            .post((request, response) => {
            response.status(200).send("Post to users");
        });
        this.app
            .route("/user/:userId")
            .all((request, response, next) => {
            /**middleware code */
            next();
        })
            .get((request, response) => {
            response
                .status(200)
                .send(`GET requested user by id ${request.params.userId}`);
        })
            .put((request, response) => {
            response
                .status(200)
                .send(`PUT requested user by id ${request.params.userId}`);
        })
            .patch((request, response) => {
            response
                .status(200)
                .send(`PATCH requested user by id ${request.params.userId}`);
        })
            .delete((request, response) => {
            response
                .status(200)
                .send(`DELETE requested user by id ${request.params.userId}`);
        });
        return this.app;
    }
}
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2Vycy9yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUE2RDtBQUc3RCxNQUFhLFdBQVksU0FBUSxrQ0FBa0I7SUFDakQsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ2YsR0FBRyxDQUFDLENBQUMsT0FBZ0IsRUFBRSxRQUFrQixFQUFFLEVBQUU7WUFDNUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLENBQUMsT0FBZ0IsRUFBRSxRQUFrQixFQUFFLEVBQUU7WUFDN0MsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDdEIsR0FBRyxDQUFDLENBQUMsT0FBZ0IsRUFBRSxRQUFrQixFQUFFLElBQWtCLEVBQUUsRUFBRTtZQUNoRSxxQkFBcUI7WUFDckIsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsQ0FBQyxPQUFnQixFQUFFLFFBQWtCLEVBQUUsRUFBRTtZQUM1QyxRQUFRO2lCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ1gsSUFBSSxDQUFDLDRCQUE0QixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLENBQUMsT0FBZ0IsRUFBRSxRQUFrQixFQUFFLEVBQUU7WUFDNUMsUUFBUTtpQkFDTCxNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUNYLElBQUksQ0FBQyw0QkFBNEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLE9BQWdCLEVBQUUsUUFBa0IsRUFBRSxFQUFFO1lBQzlDLFFBQVE7aUJBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQztpQkFDWCxJQUFJLENBQUMsOEJBQThCLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUM7YUFDRCxNQUFNLENBQUMsQ0FBQyxPQUFnQixFQUFFLFFBQWtCLEVBQUUsRUFBRTtZQUMvQyxRQUFRO2lCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUM7aUJBQ1gsSUFBSSxDQUFDLCtCQUErQixPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7UUFFTCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBM0NELGtDQTJDQyJ9