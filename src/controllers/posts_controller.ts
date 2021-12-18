import { Router, Request, Response } from "express";
import Create from "../handlers/posts/create";
import Delete from "../handlers/posts/delete";
import Details from "../handlers/posts/details";
import Edit from "../handlers/posts/edit";
import List from "../handlers/posts/list";

const posts_controller = Router();

//Create
posts_controller.post("/", async (req: Request, res: Response) => {
  await Create(req, res);
});

//List
posts_controller.get("/", async (req: Request, res: Response) => {
  await List(req, res);
});

//Details
posts_controller.get("/:id", async (req: Request, res: Response) => {
  await Details(req, res);
});

//Edit
posts_controller.put("/:id", async (req: Request, res: Response) => {
  await Edit(req, res);
});

//Delete
posts_controller.delete("/:id", async (req: Request, res: Response) => {
  await Delete(req, res);
});

export default posts_controller;
