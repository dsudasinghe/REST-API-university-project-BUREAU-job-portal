const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name!"],
      trim: true,
    },
    nid: {
      type: String,
      required: [true, "Please enter your NID!"],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email!"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password!"],
    },
    role: {
      type: Number,
      default: 0, // 0=user, 1=admin
    },
    age: {
      type: String,
      default: " ",
    },
    address: {
      type: String,
      default: " ",
    },
    latitude: {
      type: String,
      default: " ",
    },
    longitude: {
      type: String,
      default: " ",
    },
    profession: {
      type: String,
      default: " ",
    },
    affiliation: {
      type: String,
      default: " ",
    },
    qualifications: {
      type: String,
      default: " ",
    },
    certificates: {
      type: String,
      default: " ",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
