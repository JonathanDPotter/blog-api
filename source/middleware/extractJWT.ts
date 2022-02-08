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
        const { message } = error;
        return res.json({ success: false, message, error });
      } else {
        res.locals.jwt = decoded;
        logger.info(`Valid Token`);
        next();
      }
    });
  } else {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};

export default extractJWT;
