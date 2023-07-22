const express = require("express");
const { register, activateAccount, login } = require("../controllers/user");
const { authUser } = require("../middlewares/authUser");
const router = express.Router();

router.post("/register", register);
router.post("/activate/:token", authUser, activateAccount);
router.post("/login", login);

module.exports = router;
