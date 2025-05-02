import { Router } from "express";
import {
  getMyFriends,
  getRecommendedUsers,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(protectRoute); // apply middleware to all routes

router.get("/", getRecommendedUsers);
router.get("/friends", getMyFriends);

export default router;
