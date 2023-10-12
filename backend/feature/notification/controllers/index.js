const Notification = require("../models/notification");
const User = require("../../user/models/user");

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

    const { to, text } = req.body;
    const sender = await User.findById(id);
    const receiver = await User.findById(to);
    if (id === to) {
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
    const user = await User.findById(id);
    await Notification.updateMany(
      { to: user._id },
      {
        seen: true,
      }
    );
    return res.status(200).send("Seen notification success!");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
