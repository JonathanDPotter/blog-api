import { Request, Response } from "express";
import Post from "../models/post";
import logger from "../utils/logger";

const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().exec();
    res.status(200).json({ success: true, posts, count: posts.length });
  } catch (error: any) {
    const { message } = error;
    logger.error(message, error);
    res.json({ success: false, message, error });
  }
};

const getPost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params).exec();
    res.status(200).json({ success: true, post });
  } catch (error: any) {
    const { message } = error;
    logger.error(message, error);
    res.json({ success: false, message, error });
  }
};

const createPost = async (req: Request, res: Response) => {
  const newPost = req.body;
  console.log(newPost)

  try {
    const post = await Post.create(newPost);
    post.save();
    res.status(200).json({ success: true });
  } catch (error: any) {
    const { message } = error;
    logger.error(message, error);
    res.json({ success: false, message, error });
  }
};

const updatePost = async (req: Request, res: Response) => {
  try {
    logger.info(req.body);
    const updated = await Post.findByIdAndUpdate(req.params, req.body).exec();
    logger.info(updated._doc);
    res.status(200).json({ success: true });
  } catch (error: any) {
    const { message } = error;
    logger.error(message, error);
    res.json({ success: false, message, error });
  }
};

const deletePost = async (req: Request, res: Response) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params);
    logger.info(deleted._doc);
    res.status(200).json({ success: true });
  } catch (error: any) {
    const { message } = error;
    logger.error(message, error);
    res.status(500).json({ success: false, message, error });
  }
};

const controller = { getPosts, getPost, createPost, updatePost, deletePost };

export default controller;
