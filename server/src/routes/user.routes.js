import { Router } from "express";
import {
  sendFriendRequest,
  getMyFriends,
  getRecommendedUsers,
  acceptFriendRequest,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(protectRoute); // apply middleware to all routes

router.get("/", getRecommendedUsers); // get recommended users
router.get("/friends", getMyFriends); // get my friends
router.post("/friend-request/:id", sendFriendRequest); // send friend request
router.put("/friend-request/:id/accept", acceptFriendRequest); // recieve friend request

export default router;
