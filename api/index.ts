import express from "express";
import debug from "debug";
import userRouter from "./app/routers/user.router";

const PORT = process.env.PORT!;
const app = express();

const serverLogger = debug("api:server");
const controllerLogger = debug("api:userController");

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(PORT, () => {
    serverLogger(`🚀 server ready at http://localhost:${PORT}`);
});