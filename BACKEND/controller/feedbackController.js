const Feedbacks = require("../model/feedbackModel");

const feedbackController = {
  addFeedback: async (req, res) => {
    try {
      const { userId, feedback } = req.body;

      const newFeedback = new Feedbacks({
        userId,
        feedback,
      });

      await newFeedback.save();

      res.json({ msg: "Feedback sent!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = feedbackController;
