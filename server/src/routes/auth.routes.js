import { Router } from "express";
import {
  login,
  logout,
  onboard,
  profile,
  signup,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/onboarding", protectRoute, onboard);
router.get("/profile", protectRoute, profile);

export default router;
