const Feedbacks = require("../model/feedbackModel");

const feedbackController = {
  addFeedback: async (req, res) => {
    try {
      const { feedback } = req.body;

      const newFeedback = new Feedbacks({
        userId: req.user.nid,
        feedback,
      });

      await newFeedback.save();

      res.json({ msg: "Feedback sent!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  sendReply: async (req, res) => {
    try {
      const feedback = await Feedbacks.findOneAndUpdate(
        { _id: req.params.id },
        {
          reply: req.body.reply,
        }
      );
      if (!feedback) return res.status(400).json({ msg: "Action failed!" });
      res.json({ msg: "Reply sent!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getFeedbacks: async (req, res) => {
    try {
      const feedbacks = await Feedbacks.find();
      res.json({ feedbacks });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getFeedbackById: async (req, res) => {
    try {
      const feedback = await Feedbacks.findById(req.params.id);
      res.json({ feedback });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getFeedbackByUid: async (req, res) => {
    try {
      const feedbacks = await Feedbacks.find({ userId: req.params.userId });
      res.json({ feedbacks });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteFeedback: async (req, res) => {
    try {
      const feedback = await Feedbacks.findByIdAndDelete(req.params.id);
      if (!feedback) return res.status(400).json({ msg: "Invalid operation" });
      res.json({ msg: "Delete succussful!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = feedbackController;
