import { Router } from "express";
import controller from "../controllers/posts";
import extractJWT from "../middleware/extractJWT";
import { Schemas, ValidateJoi } from "../middleware/joi";

const router = Router();

// base route is /api/posts

router.get("/", controller.getPosts);

router.get("/:_id", controller.getPost);

router.post("/", ValidateJoi(Schemas.post), extractJWT, controller.createPost);

router.put(
  "/:_id",
  ValidateJoi(Schemas.update),
  extractJWT,
  controller.updatePost
);

router.delete("/:_id", extractJWT, controller.deletePost);

export default router;
