import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../../models/post";

const Delete = async (req: Request, res: Response): Promise<void> => {
  const id = +req.params.id;
  const postRepo = getRepository(Post);
  const post = await postRepo.findOne(id);
  if (post === undefined) res.status(404).send("Not found");
  await postRepo.remove(post!);
  res.status(200).send("Removed " + post?.title);
};

export default Delete;
