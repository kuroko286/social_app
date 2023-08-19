const Post = require("../models/post");

const getAllPost = async () => {
  try {
    const posts = await Post.find({}).populate({
      path: "user",
      select: {
        first_name: 1,
        last_name: 1,
        picture: 1,
      },
    });
    return posts;
  } catch (error) {
    throw error;
  }
};

const getPostsByUserId = async (userId) => {
  try {
    const posts = await Post.find({ user: userId }).populate({
      path: "user",
      select: {
        first_name: 1,
        last_name: 1,
        picture: 1,
      },
    });
    return posts;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllPost,
  getPostsByUserId,
};
