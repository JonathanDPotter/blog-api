import { Request, Response } from "express";

const getPosts = (req: Request, res: Response) => {
  res.status(200).json({ posts: "zero" });
};

const controller = { getPosts };

export default controller;
