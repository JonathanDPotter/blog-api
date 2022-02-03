import { Router } from "express";
import controller from "../controllers/utility";

const router = Router();

// base route is /api

router.get("/healthcheck", controller.healthCheck)

export default router;