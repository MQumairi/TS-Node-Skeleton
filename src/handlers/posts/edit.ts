import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Post } from "../../models/post";
import EditMapper from "../../util/edit_mapper";

const Edit = async (req: Request, res: Response): Promise<Post | undefined> => {
  const id = +req.params.id;
  const postRepo = getRepository(Post);

  //Find the post
  let foundPost = await postRepo.findOne(id);

  //Check that they exist
  if (foundPost === undefined) res.status(404).send("Post not found");

  //Get the requested changes
  let request = req.body;

  //Map the changes to the new post
  foundPost = EditMapper(foundPost, request);

  //Save to database
  await postRepo.save(foundPost!);

  //Respond with message
  res.status(201).send(foundPost);

  //Return
  return foundPost;
};

export default Edit;
