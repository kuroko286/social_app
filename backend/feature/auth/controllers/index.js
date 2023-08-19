const User = require("../../user/models/user");

const { sendVerificationEmail } = require("../../../utils/email");
const { generateToken } = require("../../../utils/token");
const jwt = require("jsonwebtoken");

const {
  validateEmail,
  validateLength,
  validateUsername,
} = require("../../user/validates/user");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      gender,
      bYear,
      bMonth,
      bDay,
    } = req.body;

    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "Email already in use. Try again later." });
    }

    if (!validateLength(first_name, 3, 30)) {
      return res.status(400).json({
        message: "First name must be at between 3 and 30 characters.",
      });
    }
    if (!validateLength(last_name, 3, 30)) {
      return res
        .status(400)
        .json({ message: "Last name must be at between 3 and 30 characters." });
    }
    if (!validateLength(password, 6, 28)) {
      return res
        .status(400)
        .json({ message: "Password must be at between 6 and 28 characters." });
    }

    const cryptedPassword = await bcrypt.hash(password, 12); // 12 salt
    const newUsername = await validateUsername(first_name + last_name);
    const newUser = new User({
      first_name,
      last_name,
      username: newUsername,
      email,
      password: cryptedPassword,
      gender,
      bYear,
      bMonth,
      bDay,
    });
    await newUser.save();

    const emailVerificationToken = generateToken(
      {
        id: newUser._id.toString(),
      },
      "15m"
    );
    const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
    await sendVerificationEmail(newUser.email, newUser.first_name, url);

    const token = generateToken({ id: newUser._id.toString() }, "30d");
    return res.json({
      id: newUser._id,
      first_name,
      last_name,
      username: newUsername,
      picture: newUser.picture,
      verified: newUser.verified,
      token,
      message: "Register successfully.",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const activateAccount = async (req, res) => {
  try {
    const { id } = req.user; // valid user id
    const { token } = req.params;
    const tokenUser = jwt.verify(token, process.env.SECRET_TOKEN); // user from verify token
    const user = await User.findById(id);

    // check if user token and verify token from same user.
    if (id !== tokenUser.id) {
      return res.status(400).json({ message: "Invalid token!" });
    }

    if (user.verified) {
      return res.status(400).json({ message: "Account already verified." });
    }
    user.verified = true;
    await user.save();
    return res.status(200).json({ message: "Account has been verified." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Email not found! Try again." });
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ message: "Wrong password! Try again." });
    }
    const token = generateToken({ id: user._id.toString() }, "30d");
    return res.json({
      id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      picture: user.picture,
      verified: user.verified,
      token,
      message: "Login successfully.",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const sendVerifyEmail = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id);
    const emailVerificationToken = generateToken(
      {
        id: id.toString(),
      },
      "15m"
    );
    const url = `${process.env.BASE_URL}/activate?token=${emailVerificationToken}`;
    await sendVerificationEmail(user.email, user.first_name, url);
    return res.status(200).json({ message: "Verify email has been sent." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  activateAccount,
  login,
  sendVerifyEmail,
};
