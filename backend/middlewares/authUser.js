const jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
  try {
    let tmpToken = req.header("Authorization");
    const token = tmpToken ? tmpToken.slice(7, tmpToken.length) : "";
    if (!token) {
      return res.status(400).json({ message: "Invalid Authentification" });
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(400).json({ message: "Invalid Authentification" });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(500).json({ messsage: error.message });
  }
};

module.exports = { authUser };
