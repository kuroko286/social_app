const express = require("express");
const { authUser } = require("../../auth/middlewares/authUser");
const {
  getAllNotifications,
  createNotification,
  seenNotification,
} = require("../controllers");
const router = express.Router();

router.get("/notifications", authUser, getAllNotifications);
router.post("/notifications", authUser, createNotification);
router.put("/notifications/seen", authUser, seenNotification);

module.exports = router;
