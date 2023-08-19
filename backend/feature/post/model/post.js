const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["profile", "cover", "normal"],
      default: "normal",
    },
    text: {
      type: String,
    },
    media: {
      type: Array,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    likes: {
      type: Array,
    },
    shares: {
      type: Array,
    },
    comments: [
      {
        comment: {
          type: String,
        },
        commentBy: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
        },
        image: {
          type: String,
        },
        commentAt: {
          type: Date,
          default: new Date(),
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
