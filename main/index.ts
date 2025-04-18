import express, { Request, Response } from "express";
import debug from "debug";
import userRouter from "./app/routers/user.router";
import authRouter from "./app/routers/auth.router";
import path from "path";
import cookieParser from "cookie-parser";

// dev
const PORT = process.env.PORT!;
const app = express();

app.use(express.urlencoded({ extended: true }));

const serverLogger = debug("main:server");
const controllerLogger = debug("main:controller");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app", "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());


app.use("/", userRouter);
app.use("/auth", authRouter);


app.listen(PORT, () => {
  serverLogger(`🚀 server ready at http://localhost:${PORT}`);
});