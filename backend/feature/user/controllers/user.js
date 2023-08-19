const User = require("../models/user");
const Code = require("../models/code");

const { sendCodeEmail } = require("../../../utils/email");
const { getRelationship } = require("../utils/user");
const bcrypt = require("bcrypt");
const { generateCode } = require("../../../utils/code");
const cloudinary = require("cloudinary");
const { getPostsByUserId } = require("../../post/services/post");

const checkEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Email not exists. Try again later." });
    }
    return res.status(200).json({ email, picture: user.picture });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const sendEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    const code = generateCode(6);
    await Code.deleteOne({ userId: user._id });
    const newCode = new Code({
      userId: user._id,
      code,
    });
    await newCode.save();
    await sendCodeEmail(email, user.first_name, code);
    return res.status(200).json({ message: "Code has been sent." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const codeVerification = async (req, res) => {
  try {
    const { code, email } = req.body;

    const user = await User.findOne({ email });

    const codeUser = await Code.findOne({ userId: user._id });

    if (codeUser.code !== code) {
      return res.status(400).send({ message: "Invalid code!" });
    }
    return res.status(200).send({ message: "Code verification successful!" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const changePassword = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await User.findOne({ email });
    const cryptedPassword = await bcrypt.hash(password, 12);
    user.password = cryptedPassword;
    await user.save();
    return res.status(200).json({ message: "Password has been changed." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const changeAvatar = async (req, res) => {
  const { id } = req.user;
  const user = await User.findById(id);
  const avatar = req.files.avatar;
  const { url } = await cloudinary.v2.uploader.upload(avatar.tempFilePath);
  user.picture = url;
  await user.save();
  res.status(200).json({ message: "Avatar has been changed." });
};

const getProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id).select("-password");
    const posts = await getPostsByUserId(id);
    return res.status(200).json({ user, posts });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const getUserIntroduce = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getOtherProfile = async (req, res) => {
  try {
    const { id } = req.user;
    const { viewedId } = req.params;
    const user = await User.findById(id).select("-password");
    const posts = await getPostsByUserId(viewedId);
    const viewedUser = await User.findById(viewedId).select("-password");
    const relationship = getRelationship(user, viewedUser);
    return res.status(200).json({ user: viewedUser, posts, relationship });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updateDetails = async (req, res) => {
  try {
    const { id } = req.user;
    // const user = await User.findById(id).select("-password");
    const data = req.body;
    const {
      first_name,
      last_name,
      phone,
      bYear,
      bMonth,
      bDay,
      gender,
      bio,
      job,
      workplace,
      highSchool,
      college,
      currentCity,
      hometown,
      instagram,
      relationship,
      // ...rest
    } = data;
    const user = await User.findOneAndUpdate(
      { _id: id },
      {
        first_name,
        last_name,
        gender,
        bDay,
        bMonth,
        bYear,
        phone,
        details: {
          bio,
          job,
          workplace,
          highSchool,
          college,
          currentCity,
          hometown,
          instagram,
          relationship,
        },
      },
      { new: true }
    );

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  activateAccount,
  login,
  sendVerifyEmail,
  checkEmail,
  sendEmail,
  codeVerification,
  changePassword,
  changeAvatar,
  getProfile,
  getOtherProfile,
  updateDetails,
  sendFriendRequest,
  sendFollowRequest,
  sendUnfriendRequest,
  sendUnfollowRequest,
  getUserIntroduce,
};
