const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    picture: {
      type: String,
      default:
        "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
      trim: true,
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
      trim: true,
    },
    bYear: {
      type: Number,
      required: true,
    },
    bMonth: {
      type: Number,
      required: true,
    },
    bDay: {
      type: Number,
      required: true,
    },

    verified: {
      type: Boolean,
      default: false,
    },
    friends: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
    followers: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
    requests: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
    search: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
    details: {
      bio: String,
      // otherName: String,
      job: String,
      workplace: String,
      highSchool: String,
      college: String,
      currentCity: String,
      hometown: String,
      relationship: {
        type: String,
        enum: ["Single", "In a relationship", "Married"],
      },
      instagram: String,
    },
    savedPosts: [
      {
        post: {
          type: mongoose.Schema.ObjectId,
          ref: "Post",
        },
        createAt: {
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

const User = mongoose.model("User", userSchema);

module.exports = User;
