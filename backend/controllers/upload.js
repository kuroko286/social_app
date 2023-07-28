const cloudinary = require("cloudinary");
const Post = require("../models/post");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const upload = async (req, res) => {
  const { text, userId } = req.body;
  const files = Object.values(req.files).flat();
  const media = [];
  for (const file of files) {
    const { url } = await cloudinary.v2.uploader.upload(file.tempFilePath);
    media.push(url);
  }
  const newPost = new Post({
    text,
    media,
    userId: userId || "64b52bc0bf9711418b05603d",
  });
  await newPost.save();
  res.status(200).json(newPost);
};

module.exports = { upload };
