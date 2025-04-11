import express, { Request, Response } from "express";
import debug from "debug";
import userRouter from "./app/routers/user.router";

// dev
const PORT = process.env.PORT!;
const app = express();

const serverLogger = debug("main:server");
const controllerLogger = debug("main:controller");

app.set("view engine", "ejs");
app.set("views", "./app/views");


app.use("/", userRouter);

app.get("/:name", (req: Request, res: Response) => {
  res.send(`Hello ${req.params.name}`);
});

app.listen(PORT, () => {
  serverLogger(`🚀 server ready at http://localhost:${PORT}`);
});