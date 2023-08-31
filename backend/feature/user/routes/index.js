const express = require("express");
const {
  checkEmail,
  sendEmail,
  codeVerification,
  changePassword,
  changeAvatar,
  getProfile,
  getOtherProfile,
  getUserIntroduce,
  updateDetails,
} = require("../controllers/user");
const { authUser } = require("../../auth/middlewares/authUser");
const router = express.Router();

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

module.exports = router;
