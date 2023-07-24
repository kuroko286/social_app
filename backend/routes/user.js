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
} = require("../controllers/user");
const { authUser } = require("../middlewares/authUser");
const router = express.Router();

router.post("/register", register);
router.post("/activate", authUser, activateAccount);
router.post("/login", login);
router.post("/sendVerification", authUser, sendVerifyEmail);
router.post("/reset/email", checkEmail);
router.post("reset/sendEmail", sendEmail);
router.post("/reset/codeVerification", codeVerification);
router.post("/reset/password", changePassword);

module.exports = router;
