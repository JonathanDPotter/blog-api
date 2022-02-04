import { Request, Response, NextFunction } from "express";
import Joi, { ObjectSchema } from "joi";
import Ipost from "../interfaces/post";
import Iuser from "../interfaces/user";


// regEx string for password
const passReg =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

export const ValidateJoi = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      console.error(error);
      return res.status(422).json({ error });
    }
  };
};

export const Schemas = {
  user: Joi.object<Iuser>({
    username: Joi.string().alphanum().max(15).required(),
    password: Joi.string().pattern(new RegExp(passReg)).required(),
  }),
  post: Joi.object<Ipost>({
    author: Joi.string().alphanum().max(15).required(),
    title: Joi.string().alphanum().max(30).required(),
    body: Joi.string().alphanum().required(),
    published: Joi.boolean().required(),
    date: Joi.number().required(),
  }),
};
