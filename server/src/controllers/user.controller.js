import { User } from "../models/user.js";

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
