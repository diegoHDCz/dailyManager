import express, { Request, Response } from "express";
import "dotenv/config";
import * as http from "http";
import * as winston from "winston";
import * as expressWinston from "express-winston";
import cors from "cors";
import { UsersRoutes } from "./users/routes.config";
import debug from "debug";
import { CommonRoutesConfig } from "./common/routes.config";
import { AuthRoutes } from "./auth/routes.config";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 8000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug("app");

app.use(express.json());
app.use(cors());

const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
};

if (!process.env.DEBUG) {
  loggerOptions.meta = false;
}



app.use(expressWinston.logger(loggerOptions));

routes.push(new UsersRoutes(app));
routes.push(new AuthRoutes(app));

const runningMessage = `Server is running at http://localhost:${port}`;
app.get("/", (request: Request, response: Response) => {
  response.status(200).send(runningMessage);
});

server.listen(port, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  console.log(runningMessage);
});
