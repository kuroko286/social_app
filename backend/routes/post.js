const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPosts,
  getAllComments,
  createComment,
  deletePost,
  likePost,
} = require("../controllers/post");
const { checkFile } = require("../middlewares/checkFile");
const { authUser } = require("../middlewares/authUser");

// post
router.post("/posts", checkFile, createPost);
router.get("/posts", getAllPosts);
router.delete("/posts/:postId", authUser, deletePost);

// comments
router.get("/posts/:postId/comments", authUser, getAllComments);
router.post("/posts/:postId/comments", authUser, createComment);

// reacts
router.put("/posts/:postId/like", authUser, likePost);

module.exports = router;
