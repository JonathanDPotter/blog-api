import express, { Request, Response } from "express";
import cors from "cors";
// utils
import config from "./config";
import mongo from "./utils/mongo";
import logger from "./utils/logger";
import welcome from "./welcome.json";
// routes
import utilityRoutes from "./routes/utility";
import userRoutes from "./routes/user";
import postRoutes from "./routes/posts";

const server = express();

server.listen(config.server.port, async () => {
  logger.info(
    `Server listening on ${config.server.hostname}:${config.server.port}`
  );
  await mongo();
  // parsing requests
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  // cors setup
  server.use(cors());
  // routes
  server.use("/api", utilityRoutes);
  server.use("/api/users", userRoutes);
  server.use("/api/posts", postRoutes);
  // welcome message
  server.get("/", (req: Request, res: Response) => {
    res.status(200).json(welcome);
  });
});
