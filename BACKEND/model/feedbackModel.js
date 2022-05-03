const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
  userId: {
    type: String,
    required: [true, "Please enter your NID!"],
    trim: true,
  },
  feedback: {
    type: String,
    required: [true, "Please enter your feedback!"],
    trim: true,
  },
  reply: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
