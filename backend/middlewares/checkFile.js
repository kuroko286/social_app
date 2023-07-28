const checkFile = async (req, res, next) => {
  try {
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { checkFile };
