import { Router } from "express";
import controller from "../controllers/posts";

const router = Router();

router.get("/posts", controller.getPosts);

export default router;
