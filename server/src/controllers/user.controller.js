import { User } from "../models/user.js";
import { FriendRequest } from "../models/friendRequest.js";

export const getRecommendedUsers = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = req.user;
    const recommendedUsers = await User.find({
      $and: [
        { _id: { $ne: userId } }, // exclude myself (current user)
        { $id: { $nin: user.friends } }, // exclude my friends
        { onBoarding: true },
      ],
    });

    return res.status(200).json(recommendedUsers);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const getMyFriends = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId)
      .select("friends")
      .populate(
        "friends",
        "fullName profilePic nativeLanguage learningLanguage"
      );

    return res.status(200).json(user.friends);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const sendFriendRequest = async (req, res) => {
  try {
    const myId = req.user.id;
    const { id: recipientId } = req.params;

    // prevent sending friend request to yourself
    if (myId === recipientId) {
      return res.status(400).json({
        success: false,
        message: "You can't send friend request to yourself",
      });
    }

    const recipient = await User.findById(recipientId);
    if (!recipient) {
      return res.status(400).json({
        message: "Recipient not found",
      });
    }

    if (recipient.friends.includes(myId)) {
      // checks if user is already a friend
      return res.status(400).json({
        message: "You are already friends",
      });
    }

    const existingRequest = await FriendRequest.findOne({
      $or: [
        { sender: myId, recipient: recipientId },
        { sender: recipientId, recipient: myId },
      ],
    });

    if (existingRequest) {
      return res.status(400).json({
        message: "Friend request already exists between you and this user",
      });
    }

    const friendRequest = await FriendRequest.create({
      sender: myId,
      recipient: recipientId,
    });

    return res.status(200).json(friendRequest);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
