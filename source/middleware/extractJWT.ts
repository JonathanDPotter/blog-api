import { Request, Response, NextFunction } from "express";
import logger from "../utils/logger";
import jwt from "jsonwebtoken";
import config from "../config";

const extractJWT = (req: Request, res: Response, next: NextFunction) => {
  logger.info("Validating Token");
  let token = req.headers.authorization?.split(" ")[1];

  if (token) {
    jwt.verify(token, config.server.token.secret, (error, decoded) => {
      if (error) {
        return res.status(404).json({ message: error, error });
      } else {
        res.locals.jwt = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

export default extractJWT;
