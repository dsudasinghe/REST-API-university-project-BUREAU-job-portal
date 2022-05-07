const router = require("express").Router();
const feedbackController = require("../controller/feedbackController");
const auth = require("../middleware/auth");

router.post("/add", auth, feedbackController.addFeedback);

router.put("/reply/:id", feedbackController.sendReply);

router.get("/", feedbackController.getFeedbacks);

router.get("/:id", feedbackController.getFeedbackById);

router.get("/user_feedbacks/:userId", feedbackController.getFeedbackByUid);

router.delete("/delete/:id", feedbackController.deleteFeedback);

module.exports = router;
