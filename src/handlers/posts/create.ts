import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../../models/post";

const Create = async (req: Request, res: Response): Promise<Post | undefined> => {
  //Try to create the object
  try {
    let post: Post = req.body;
    const postRepo = getRepository(Post);
    await postRepo.save(post);
    res.status(201).send(post);
    return post;
  } catch (error) {
    //Upon failure, do the following
    res.status(409).send("Failed to create Post, error:\n" + error);
    return undefined;
  }
};

export default Create;
