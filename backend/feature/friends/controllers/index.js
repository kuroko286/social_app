const User = require("../../user/models/user");
const {
  getFriendsByUserId,
  getSuggestFriendsByUserId,
  getFriendRequestsByUserId,
} = require("../services");

// get requests
const getFriends = async (req, res) => {
  try {
    const { id } = req.user;
    const friends = await getFriendsByUserId(id);
    return res.status(200).json(friends);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getSuggestFriend = async (req, res) => {
  try {
    const { id } = req.user;
    const suggestFriend = await getSuggestFriendsByUserId(id);
    return res.status(200).json(suggestFriend);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getFriendRequests = async (req, res) => {
  try {
    const { id } = req.user;
    const requests = await getFriendRequestsByUserId(id);
    return res.status(200).json(requests);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// update requests
const sendFriendRequest = async (req, res) => {
  try {
    const { id } = req.user;
    const { userId } = req.params;
    if (id === userId) {
      return res
        .status(400)
        .json({ message: "You can't send friend request to yourself." });
    }
    const sender = await User.findById(id);
    const receiver = await User.findById(userId);

    if (receiver.requests.includes(sender._id)) {
      return res
        .status(400)
        .json({ message: "You already sent friend request to this user." });
    }
    if (receiver.friends.includes(sender._id)) {
      return res
        .status(400)
        .json({ message: "You already be friend to this user." });
    }
    await sender.updateOne({ $push: { following: receiver._id } });
    await receiver.updateOne({ $push: { followers: sender._id } });
    await receiver.updateOne({ $push: { requests: sender._id } });

    return res.status(200).json({ message: "Friend request has been sent." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const sendFollowRequest = async (req, res) => {
  try {
    const { id } = req.user;
    const { userId } = req.params;
    const sender = await User.findById(id);
    const receiver = await User.findById(userId);
    if (id === userId) {
      return res
        .status(400)
        .json({ message: "You can't send follow request to yourself." });
    }
    if (
      receiver.followers.includes(sender._id) ||
      sender.following.includes(receiver._id)
    ) {
      return res
        .status(400)
        .json({ message: "You already be follow this user." });
    }
    await sender.updateOne({ $push: { following: receiver._id } });
    await receiver.updateOne({ $push: { followers: sender._id } });

    return res.status(200).json({ message: "Follow request has been sent." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const sendUnfollowRequest = async (req, res) => {
  try {
    const { id } = req.user;
    const { userId } = req.params;
    const sender = await User.findById(id);
    const receiver = await User.findById(userId);
    if (id === userId) {
      return res
        .status(400)
        .json({ message: "You can't send unfollow request to yourself." });
    }
    if (
      !receiver.followers.includes(sender._id) ||
      !sender.following.includes(receiver._id)
    ) {
      return res
        .status(400)
        .json({ message: "You already not be follow this user." });
    }

    await sender.updateOne({ $pull: { following: receiver._id } });
    await receiver.updateOne({ $pull: { followers: sender._id } });

    return res.status(200).json({ message: "Unfollow request has been sent." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const sendUnfriendRequest = async (req, res) => {
  try {
    const { id } = req.user;
    const { userId } = req.params;
    const sender = await User.findById(id);
    const receiver = await User.findById(userId);
    if (id === userId) {
      return res
        .status(400)
        .json({ message: "You can't send unfriend request to yourself." });
    }
    if (!sender.friends.includes(userId) || !receiver.friends.includes(id)) {
      return res
        .status(400)
        .json({ message: "You already not be friend to this user." });
    }
    await sender.updateOne({
      $pull: {
        friends: receiver._id,
        followers: receiver._id,
        following: receiver._id,
      },
    });
    await receiver.updateOne({
      $pull: {
        friends: sender._id,
        followers: sender._id,
        following: sender._id,
      },
    });

    return res.status(200).json({ message: "Unfriend request has been sent." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const cancelFriendRequest = async (req, res) => {
  try {
    const { id } = req.user;
    const { userId } = req.params;
    const sender = await User.findById(id);
    const receiver = await User.findById(userId);
    if (id === userId) {
      return res
        .status(400)
        .json({ message: "You can't send unfriend request to yourself." });
    }
    if (
      !receiver.requests.includes(sender._id) ||
      receiver.friends.includes(sender._id)
    ) {
      return res
        .status(400)
        .json({ message: "You already canceled friend req to this user." });
    }
    await receiver.updateOne({ $pull: { requests: sender._id } });
    await sender.updateOne({ $pull: { following: receiver._id } });
    await receiver.updateOne({ $pull: { followers: sender._id } });

    return res
      .status(200)
      .json({ message: "Cancel friend request has been sent." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const acceptFriendRequest = async (req, res) => {
  try {
    const { id } = req.user;
    const { userId } = req.params;
    const receiver = await User.findById(id);
    const sender = await User.findById(userId);
    if (id === userId) {
      return res
        .status(400)
        .json({ message: "You can't accept friend request to yourself." });
    }
    if (!receiver.requests.includes(sender._id)) {
      return res.status(400).json({
        message: "You already not be sended friend req by this user.",
      });
    }
    await receiver.updateOne({ $pull: { requests: sender._id } });
    await sender.updateOne({
      $push: { friends: receiver._id, followers: receiver._id },
    });
    await receiver.updateOne({
      $push: { friends: sender._id, following: sender._id },
    });
    return res
      .status(200)
      .json({ message: "Friend request has been accepted." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteFriendRequest = async (req, res) => {
  try {
    const { id } = req.user;
    const { userId } = req.params;
    const receiver = await User.findById(id);
    const sender = await User.findById(userId);
    if (id === userId) {
      return res
        .status(400)
        .json({ message: "You can't delete friend request to yourself." });
    }
    if (!receiver.requests.includes(sender._id)) {
      return res
        .status(400)
        .json({
          message: "You already not be sended friend req by this user.",
        });
    }
    await receiver.updateOne({
      $pull: { requests: sender._id, followers: sender._id },
    });
    await sender.updateOne({ $pull: { following: receiver._id } });
    return res
      .status(200)
      .json({ message: "Friend request has been deleted." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  sendFriendRequest,
  sendFollowRequest,
  sendUnfollowRequest,
  sendUnfriendRequest,
  getFriends,
  getSuggestFriend,
  getFriendRequests,
  cancelFriendRequest,
  acceptFriendRequest,
  deleteFriendRequest,
};
