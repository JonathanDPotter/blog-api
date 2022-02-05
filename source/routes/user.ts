import { Router } from "express";
import controller from "../controllers/user";
import { ValidateJoi, Schemas } from "../middleware/joi";
import extractJWT from "../middleware/extractJWT";

const router = Router();

// base route is /api/users

router.get("/", controller.getUsers);

router.get("/validate", extractJWT, controller.validateToken);

router.get("/:_id", controller.getUser);

router.post("/register", ValidateJoi(Schemas.user), controller.register);

router.post("/login", ValidateJoi(Schemas.user), controller.login);

export default router;
