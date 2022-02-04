import { Router } from "express";
import controller from "../controllers/posts";
import { Schemas, ValidateJoi } from "../middleware/joi";

const router = Router();

// base route is /api/posts

router.get("/", controller.getPosts);

router.get("/:id", controller.getPost);

router.post("/", ValidateJoi(Schemas.post), controller.createPost);

router.put("/:_id", ValidateJoi(Schemas.post), controller.updatePost)

router.delete("/:_id", controller.deletePost);

export default router;
