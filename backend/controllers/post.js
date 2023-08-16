const cloudinary = require("cloudinary");
const Post = require("../models/post");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const createPost = async (req, res) => {
  try {
    const { text } = req.body;
    const { id } = req.user;
    const media = [];
    if (req.files) {
      const files = Object.values(req.files).flat();
      for (const file of files) {
        const { url } = await cloudinary.v2.uploader.upload(file.tempFilePath);
        media.push(url);
      }
    }

    const newPost = new Post({
      text,
      media,
      userId: id,
    });
    await newPost.save();
    res.status(200).json(newPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("user");
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    return res.status(200).json({ message: "Post has been deleted." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllComments = async (req, res) => {
  try {
    const { data } = await Post.find().populate("userId");
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createComment = async (req, res) => {
  try {
    const { userId } = req.user;
    const { comment } = req.body;
    const newComment = {
      comment,
      commentBy: userId,
    };

    const postId = req.params.postId;
    await Post.findOneAndUpdate(
      { _id: postId },
      { $push: { comments: newComment } }
    );
    res.status(200).json({ message: "Comment successfully." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndUpdate(id, { $push: { likes: req.user._id } });
    return res.status(200).json({ message: "Post has been liked." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  deletePost,
  getAllComments,
  createComment,
  likePost,
};
