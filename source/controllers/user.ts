import { Request, Response } from "express";

const getUsers = (req: Request, res: Response) => {
  res.status(200).json({ users: "none" });
};

const controller = { getUsers };

export default controller;
