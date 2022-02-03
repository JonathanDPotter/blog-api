import mongoose from "mongoose";
import config from "../config";
import logger from "./logger";

const mongo = async () => {
  try {
    await mongoose.connect(config.mongo.url, config.mongo.options);
    logger.info(`Connected to ${config.mongo.database} at mongodb.`);
  } catch (error) {
    logger.error("Could not connect to database.");
    process.exit(1);
  }
};

export default mongo;
