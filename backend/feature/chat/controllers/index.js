const Message = require("../models/message");

exports.sendMessage = async (req, res) => {
  try {
    const { id } = req.user;
    const { toId } = req.params;
    const { text } = req.body;
    const sender = await User.findById(id);
    const receiver = await User.findById(userId);
    if (id === toId) {
      return res
        .status(400)
        .json({ message: "You can't send message to yourself." });
    }
    const newMessage = new Message({
      from: sender._id,
      to: receiver._id,
      text,
    });
    await newMessage.save();
    return res.status(200).send("Send message success!");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const { id } = req.user;
    const { toId } = req.params;
    const messages = await Message.find({
      $or: [
        { from: id, to: toId },
        { from: toId, to: id },
      ],
    })
      .sort("-createdAt")
      .limit(20);
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.seenMeesage = async (req, res) => {
  try {
    const { id } = req.user;
    const { messageId } = req.params;
    await Message.findByIdAndUpdate(messageId, {
      seen: true,
    });
    return res.status(200).send("Seen message success!");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
