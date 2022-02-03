import { Router } from "express";
import controller from "../controllers/user";

const router = Router();

router.get("/users", controller.getUsers);

export default router;
