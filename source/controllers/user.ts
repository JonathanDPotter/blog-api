import { Request, Response } from "express";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import logger from "../utils/logger";
import Iuser from "../interfaces/user";
import User from "../models/user";
import signJWT from "../utils/signJWT";

const validateToken = (req: Request, res: Response) => {
  logger.info("Token validated, user authorized");
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select("-password").exec();
    return res.status(200).json({
      users,
      count: users.length,
    });
  } catch (error: any) {
    logger.error(error.message, error);
    res.status(500).json({ message: error.message, error });
  }
};

const getUser = (req: Request, res: Response) => {
  return res.status(200).json(req.params);
};

const login = async (req: Request, res: Response) => {

  // NEEDS A REWRITE  MADE A MISTAKE CONVERING IT TO ASYNC
  let { username, password } = req.body as Iuser;

  try {
    const user = await User.findOne({ username }).exec();

    if (user) {
      try {
        const isAuth = await bcrypt.compare(password, user.password);

        signJWT(user, (error, token) => {
          if (error) {
            logger.error(error.message, error);
            return res.status(401).json({ message: "Unauthorized" });
          } else if (token) {
            return res.status(200).json({
              message: "Auth successful.",
              token,
              user: user,
            });
          }
        });
      } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
      }
    } else {
      res.status(500).json({ message: "User not found." });
    }
  } catch (error: any) {
    logger.error(error.message, error);
    return res.status(500).json({ message: "User not found." });
  }
};

const register = async (req: Request, res: Response) => {
  let { username, password } = req.body as Iuser;

  const exists = await User.findOne({ username }).exec();

  if (exists) {
    return res.status(500).json({ message: "Username already in use." });
  } else {
    bcrypt.hash(password, 10, (hashError, hash) => {
      if (hashError) {
        return res
          .status(500)
          .json({ message: hashError.message, error: hashError });
      }

      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        username,
        password: hash,
      });

      return newUser
        .save()
        .then((user) => res.status(201).json(user))
        .catch((error) =>
          res.status(500).json({ message: error.message, error })
        );
    });
  }
};

const controller = { getUsers, getUser, register, login, validateToken };

export default controller;
