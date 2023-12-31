const express = require("express");
const router = express.Router();
const {
  createPost,
  getAllPosts,
  getAllComments,
  createComment,
  deletePost,
  likePost,
  unlikePost,
} = require("../controllers/post");
const { checkFile } = require("../../../middlewares/checkFile");
const { authUser } = require("../../auth/middlewares/authUser");

// post
router.post("/posts", checkFile, authUser, createPost);
router.get("/posts", getAllPosts);
router.delete("/posts/:postId", authUser, deletePost);

// comments
router.get("/posts/:postId/comments", authUser, getAllComments);
router.post("/posts/:postId/comments", authUser, createComment);

// reacts
router.put("/posts/:postId/like", authUser, likePost);
router.put("/posts/:postId/unlike", authUser, unlikePost);

module.exports = router;
