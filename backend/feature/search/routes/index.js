const express = require("express");
const {
  getSearchHistory,
  deleteSearchedUser,
  getSearchResult,
  addSearchHistory,
} = require("../controllers");
const { authUser } = require("../../auth/middlewares/authUser");
const router = express.Router();

router.get("/search", authUser, getSearchHistory);
router.post("/search", authUser, getSearchResult);
router.put("/search/:userId/add", authUser, addSearchHistory);
router.put("/search/:userId/delete", authUser, deleteSearchedUser);

module.exports = router;
