import { Router } from "express";
import controller from "../controllers/user";

const router = Router();

// base route is /api/users

router.get("/", controller.getUsers);

router.get("/:userId", controller.getUser);

router.post("/", controller.createUser);

export default router;
