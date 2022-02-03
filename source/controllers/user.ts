import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/user";

const getUsers = (req: Request, res: Response) => {
  res.status(200).json({ users: "none" });
};

const getUser = (req: Request, res: Response) => {

  res.status(200).json(req.params);
};

const createUser = (req: Request, res: Response) => {
  // insert a user into the database
  res.status(200).json(req.body);
}

const controller = { getUsers, getUser, createUser };

export default controller;
