const express = require("express");
const {
  register,
  activateAccount,
  login,
  sendVerifyEmail,
  checkEmail,
  sendEmail,
  codeVerification,
  changePassword,
  changeAvatar,
  getProfile,
  getOtherProfile,
  getUserIntroduce,
  updateDetails,
  sendFriendRequest,
  sendFollowRequest,
  sendUnfollowRequest,
  sendUnfriendRequest,
} = require("../controllers/user");
const { authUser } = require("../middlewares/authUser");
const router = express.Router();

// register, login
router.post("/register", register);
router.post("/login", login);

// verify account
router.post("/activate/:token", authUser, activateAccount);
router.post("/sendVerification", authUser, sendVerifyEmail);

// reset password
router.post("/reset/email", checkEmail);
router.post("/reset/sendEmail", sendEmail);
router.post("/reset/codeVerification", codeVerification);
router.post("/reset/password", changePassword);

// change avatar
router.put("/users/avatar", authUser, changeAvatar);

//profile
router.get("/users/profile", authUser, getProfile);
router.get("/users/introduce/:id", getUserIntroduce);
router.get("/users/:viewedId", authUser, getOtherProfile);
router.put("/users", authUser, updateDetails);

// friends, followers
router.put("/users/:userId/friends", authUser, sendFriendRequest);
router.put("/users/:userId/followers", authUser, sendFollowRequest);
router.delete("/users/:userId/followers", authUser, sendUnfollowRequest);
router.delete("/users/:userId/friends", authUser, sendUnfriendRequest);

module.exports = router;
