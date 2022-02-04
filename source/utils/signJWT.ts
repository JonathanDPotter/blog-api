import jwt from "jsonwebtoken";
import config from "../config";
import logger from "./logger";
import Iuser from "../interfaces/user";

const signJWT = (
  user: Iuser,
  callback: (error: Error | null, token: string | null) => void
): void => {
  let timeSinceEpoch = new Date().getTime();
  let expirationTime =
    timeSinceEpoch + Number(config.server.token.expireTime) * 100000;
  let expirationTimeInSeconds = Math.floor(expirationTime / 1000);
  logger.info(`Attempting to sign token for ${user}`);

  try {
    const { username, password } = user;
    jwt.sign({ username }, config.server.token.secret, {
      issuer: config.server.token.issuer,
      algorithm: "HS256",
      expiresIn: expirationTimeInSeconds,
    }),
      (error: any, token: string) => {
        if (error) {
          {
            callback(error, null);
          }
        } else if (token) {
          {
            callback(null, token);
          }
        }
      };
  } catch (error: any) {
    logger.error(error.message, error);
    callback(error, null);
  }
};

export default signJWT;
