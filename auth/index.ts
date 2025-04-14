import express, { Request, Response } from "express";
import debug from "debug";
import authRouter from "./app/routers/auth.router";

const PORT = process.env.PORT!;
const app = express();

const serverLogger = debug("auth:server");
const controllerLogger = debug("auth:controller");

app.use(express.json());

app.use("/", authRouter);

app.listen(PORT, () => {
    serverLogger(`🚀 server ready at http://localhost:${PORT}`);
});