const router = require("express").Router();
const feedbackController = require("../controller/feedbackController");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");

router.post("/add", auth, feedbackController.addFeedback);

router.put("/reply/:id", auth, authAdmin, feedbackController.sendReply);

router.get("/", auth, authAdmin, feedbackController.getFeedbacks);

router.get("/:id", auth, feedbackController.getFeedbackById);

router.get(
  "/user_feedbacks/:userId",
  auth,
  feedbackController.getFeedbackByUid
);

router.delete("/delete/:id", auth, feedbackController.deleteFeedback);

module.exports = router;
