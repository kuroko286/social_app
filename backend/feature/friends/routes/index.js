const express = require("express");
const {
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
} = require("../controllers");
const { authUser } = require("../../auth/middlewares/authUser");
const router = express.Router();

// get friends, requests
router.get("/friends", authUser, getFriends);
router.get("/friends/suggest", authUser, getSuggestFriend);
router.get("/friends/requests", authUser, getFriendRequests);

// send friends, follow requests
router.put("/users/:userId/addFriend", authUser, sendFriendRequest);
router.put("/users/:userId/cancelFriendRequest", authUser, cancelFriendRequest);
router.put("/users/:userId/acceptFriend", authUser, acceptFriendRequest);
router.put("/users/:userId/follow", authUser, sendFollowRequest);
router.put("/users/:userId/unfollow", authUser, sendUnfollowRequest);
router.put("/users/:userId/unfriend", authUser, sendUnfriendRequest);
router.put("/users/:userId/deleteFriendRequest", authUser, deleteFriendRequest);

module.exports = router;
