const mongoose = require("mongoose");

const codeSchema = mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Code = mongoose.model("Code", codeSchema);

module.exports = Code;
