const express = require("express");
const {
  sendMessage,
  getAllMessages,
  seenMessage,
  getNewMessages,
} = require("../controllers");
const { authUser } = require("../../auth/middlewares/authUser");
const router = express.Router();

router.post("/chat/:toId", authUser, sendMessage);
router.get("/chat/:toId", authUser, getAllMessages);
router.put("/chat/:messageId/seen", authUser, seenMessage);
router.get("/chat/getNewMessages", authUser, getNewMessages);

module.exports = router;
