import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import router from "./src/router";
import session from "express-session";
import "./src/libs/passport";
import passport from "passport";

dotenv.config();
const app = express();
const server = createServer(app);
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

server.listen(port, () => console.log(`Server is running on port ${port}`));
