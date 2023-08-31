const User = require("../../user/models/user");

const getSearchHistory = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await User.findOne({ _id: id }).populate({
      path: "search",
      select: "_id picture first_name last_name",
    });
    const data = user.search;
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteSearchedUser = async (req, res) => {
  try {
    const { id } = req.user;
    const { userId } = req.params;
    const user = await User.findOne({ _id: id });
    const searchedUser = await User.findOne({ _id: userId });

    if (!user.search.includes(searchedUser._id)) {
      return res.status(400).json({ message: "Searched user not found" });
    }
    await user.updateOne({ $pull: { search: searchedUser._id } });
    return res.status(200).json({ message: "Searched user has been deleted." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getSearchResult = async (req, res) => {
  try {
    const { id } = req.user;
    const { query } = req.body;
    const users = await User.aggregate([
      {
        $project: {
          _id: 1,
          picture: 1,
          first_name: 1,
          last_name: 1,
          fullName: { $concat: ["$first_name", " ", "$last_name"] },
        },
      },
      {
        $match: {
          fullName: { $regex: new RegExp(query, "i") },
        },
      },
    ]);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const addSearchHistory = async (req, res) => {
  try {
    const { id } = req.user;
    const { userId } = req.params;
    const user = await User.findOne({ _id: id });
    const searchedUser = await User.findOne({ _id: userId });
    await user.updateOne({ $push: { search: searchedUser._id } });
    return res.status(200).json({ message: "Searched user has been added." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSearchHistory,
  deleteSearchedUser,
  getSearchResult,
  addSearchHistory,
};
