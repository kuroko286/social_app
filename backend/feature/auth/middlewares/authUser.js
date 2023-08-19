const jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
  try {
    let tmpToken = req.headers["authorization"];
    const token = tmpToken ? tmpToken.split(" ")[1] : null;
    if (!token) {
      return res.status(400).json({ message: "Missing token." });
    }
    jwt.verify(token, process.env.SECRET_TOKEN, (err, user) => {
      if (err) {
        console.log(err);
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
