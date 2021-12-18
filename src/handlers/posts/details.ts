import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../../models/post";

const Details = async (req: Request, res: Response): Promise<Post | undefined> => {
  const id = +req.params.id;
  const post = await getRepository(Post).findOne(id);

  if (post === undefined) res.status(404).send("Post not found");
  res.status(200).send(post);

  return post;
};

export default Details;
