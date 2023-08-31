const express = require("express");
const { authUser } = require("../../auth/middlewares/authUser");
const {
  getAllNotifications,
  createNotification,
  seenNotification,
} = require("../controllers");
const router = express.Router();

router.get("/notifications", authUser, getAllNotifications);
router.post("/notifications/:fromId", authUser, createNotification);
router.put("/notifications/:notificationId/seen", authUser, seenNotification);

module.exports = router;
