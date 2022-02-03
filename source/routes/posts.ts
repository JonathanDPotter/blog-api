import { Router } from "express";
import controller from "../controllers/posts";

const router = Router();

// base route is /api/posts

router.get("/", controller.getPosts);

export default router;
