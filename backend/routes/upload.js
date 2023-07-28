const express = require("express");
const router = express.Router();
const { upload } = require("../controllers/upload");
const { checkFile } = require("../middlewares/checkFile");

router.post("/upload", checkFile, upload);

module.exports = router;
