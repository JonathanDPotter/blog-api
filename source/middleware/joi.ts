import { Request, Response, NextFunction } from "express";
import Joi, { ObjectSchema } from "joi";
import Ipost from "../interfaces/post";
import Iupdate from "../interfaces/update";
import Iuser from "../interfaces/user";
import logger from "../utils/logger";

// regEx string for password
const passReg =
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";

export const ValidateJoi = (schema: ObjectSchema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      logger.info(`Validating: ${req.body}`);
      next();
    } catch (error) {
      logger.error(error);
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
    author: Joi.string().max(15).required(),
    title: Joi.string().max(30).required(),
    body: Joi.string().required(),
    published: Joi.boolean().required(),
    date: Joi.number().required(),
  }),
  update: Joi.object<Iupdate>({
    title: Joi.string().max(15).required(),
    body: Joi.string().required(),
    published: Joi.boolean().required(),
  }),
};
