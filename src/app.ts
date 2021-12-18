import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import "reflect-metadata";

dotenv.config();
export const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log("listening on " + port);
});
