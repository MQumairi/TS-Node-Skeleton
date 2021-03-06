import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Post } from "./models/post";
import posts_controller from "./controllers/posts_controller";

dotenv.config();

createConnection({
  type: "postgres",
  host: "localhost",
  database: process.env.DBNAME,
  entities: [Post],
  synchronize: true,
  logging: false,
});

export const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/posts", posts_controller);

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello world" });
});

app.get("*", (req: Request, res: Response) => {
  res.json({ message: "page not found" });
});

app.listen(port, () => {
  console.log("listening on " + port);
});
