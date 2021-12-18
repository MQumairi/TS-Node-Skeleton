import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../../models/post";

const List = async (req: Request, res: Response): Promise<Post[]> => {
  const postRepo = getRepository(Post);
  const postList = await postRepo.find();
  res.json(postList);
  return postList;
};

export default List;
