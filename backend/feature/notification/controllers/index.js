const Notification = require("../models/notification");

exports.getAllNotifications = async (req, res) => {
  try {
    const { id } = req.user;
    const notifications = await Notification.find({
      to: id,
    })
      .sort("-createdAt")
      .limit(10);
    return res.status(200).json(notifications);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createNotification = async (req, res) => {
  try {
    const { id } = req.user;
    const { fromId } = req.params;
    const { text } = req.body;
    const sender = await User.findById(fromId);
    const receiver = await User.findById(id);
    if (id === fromId) {
      return res
        .status(400)
        .json({ message: "You can't send notification to yourself." });
    }
    const newNotification = new Notification({
      from: sender._id,
      to: receiver._id,
      text,
    });
    await newNotification.save();
    return res.status(200).send("Send notification success!");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.seenNotification = async (req, res) => {
  try {
    const { id } = req.user;
    const { notificationId } = req.params;
    await Notification.findByIdAndUpdate(notificationId, {
      seen: true,
    });
    return res.status(200).send("Seen notification success!");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
