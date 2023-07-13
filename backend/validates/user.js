const User = require("../models/user");

const validateEmail = (email) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};

const validateLength = (text, min, max) => {
  return text.length >= min && text.length <= max;
};

// change username until unique
const validateUsername = async (username) => {
  let flag = false;
  do {
    const user = await User.findOne({ username });
    if (user) {
      // change username
      username += (Date.now() * Math.random()).toString().substring(0, 1); // add 1 number per loop.
      flag = true;
    } else {
      flag = false;
    }
  } while (flag);
  return username;
};
module.exports = { validateEmail, validateLength, validateUsername };
