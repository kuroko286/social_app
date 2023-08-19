const express = require("express");
const {
  sendFriendRequest,
  sendFollowRequest,
  sendUnfollowRequest,
  sendUnfriendRequest,
} = require("../controllers");
const { authUser } = require("../../auth/middlewares/authUser");
const router = express.Router();

// friends, followers
router.put("/users/:userId/friends", authUser, sendFriendRequest);
router.put("/users/:userId/followers", authUser, sendFollowRequest);
router.delete("/users/:userId/followers", authUser, sendUnfollowRequest);
router.delete("/users/:userId/friends", authUser, sendUnfriendRequest);

module.exports = router;
