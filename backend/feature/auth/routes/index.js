const express = require("express");
const {
  register,
  activateAccount,
  login,
  sendVerifyEmail,
} = require("../controllers");
const { authUser } = require("../middlewares/authUser");
const router = express.Router();

// register, login
router.post("/register", register);
router.post("/login", login);

// verify account
router.post("/activate/:token", authUser, activateAccount);
router.post("/sendVerification", authUser, sendVerifyEmail);

module.exports = router;
