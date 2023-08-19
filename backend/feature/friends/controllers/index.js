const User = require("../../user/models/user");

const sendFriendRequest = async (req, res) => {
  try {
    const { id } = req.user;
    const { userId } = req.params;
    const user = await User.findById(id).select("-password");
    const user2 = await User.findById(userId).select("-password");
    if (id === userId) {
      return res
        .status(400)
        .json({ message: "You can't send friend request to yourself." });
    }
    if (user2.requests.includes(id)) {
      return res
        .status(400)
        .json({ message: "You already sent friend request to this user." });
    }
    if (user.friends.includes(userId)) {
      return res
        .status(400)
        .json({ message: "You already be friend to this user." });
    }

    user2.requests.push(id);
    user.following.push(userId);
    user2.followers.push(id);
    await user.save();
    await user2.save();
    return res.status(200).json({ message: "Friend request has been sent." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const sendFollowRequest = async (req, res) => {
  try {
    const { id } = req.user;
    const { userId } = req.params;
    const user = await User.findById(id).select("-password");
    const user2 = await User.findById(userId).select("-password");
    if (id === userId) {
      return res
        .status(400)
        .json({ message: "You can't send follow request to yourself." });
    }
    if (user2.followers.includes(id)) {
      return res
        .status(400)
        .json({ message: "You already be follow this user." });
    }
    user2.followers.push(id);
    user.following.push(userId);
    await user.save();
    await user2.save();
    return res.status(200).json({ message: "Follow request has been sent." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const sendUnfollowRequest = async (req, res) => {
  try {
    const { id } = req.user;
    const { userId } = req.params;
    const user = await User.findById(id).select("-password");
    const user2 = await User.findById(userId).select("-password");
    if (id === userId) {
      return res
        .status(400)
        .json({ message: "You can't send unfollow request to yourself." });
    }
    if (!user2.followers.includes(id)) {
      return res
        .status(400)
        .json({ message: "You already not be follow this user." });
    }
    user.following = user.following.filter(
      (item) => item.toString() !== userId
    );
    user2.followers = user2.followers.filter((item) => item.toString() !== id);
    await user.save();
    await user2.save();
    return res.status(200).json({ message: "Unfollow request has been sent." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const sendUnfriendRequest = async (req, res) => {
  try {
    const { id } = req.user;
    const { userId } = req.params;
    const user = await User.findById(id).select("-password");
    const user2 = await User.findById(userId).select("-password");
    if (id === userId) {
      return res
        .status(400)
        .json({ message: "You can't send unfriend request to yourself." });
    }
    if (!user.friends.includes(userId)) {
      return res
        .status(400)
        .json({ message: "You already not be friend to this user." });
    }
    user.friends = user.friends.filter((item) => item.toString() !== userId);
    user2.friends = user2.friends.filter((item) => item.toString() !== id);
    await user.save();
    await user2.save();
    return res.status(200).json({ message: "Unfriend request has been sent." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  sendFriendRequest,
  sendFollowRequest,
  sendUnfollowRequest,
  sendUnfriendRequest,
};
