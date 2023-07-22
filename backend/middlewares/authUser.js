const authUser = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    if (!decoded) {
      return res.status(400).json({ error: "Invalid token" });
    }
    const { id } = decoded;
    if (userId !== id) {
      return res.status(400).json({ error: "Invalid token" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { authUser };
