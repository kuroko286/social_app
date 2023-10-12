const User = require("../../user/models/user");

exports.getFriendsByUserId = async (userId) => {
  const user = await User.findOne({ _id: userId }).populate({
    path: "friends",
    select: "_id picture first_name last_name",
  });
  return user.friends;
};

exports.getSuggestFriendsByUserId = async (userId) => {
  const userFriends = await User.findOne({ _id: userId }).select("friends");

  const users = await User.find({
    _id: { $nin: [...userFriends.friends, userId] },
  });

  return users.map((user) => {
    return {
      _id: user._id,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      hasRequested: user.requests.includes(userId),
    };
  });
};

exports.getFriendRequestsByUserId = async (userId) => {
  const user = await User.findOne({ _id: userId }).populate({
    path: "requests",
    select: "_id picture first_name last_name",
  });
  return user.requests;
};
