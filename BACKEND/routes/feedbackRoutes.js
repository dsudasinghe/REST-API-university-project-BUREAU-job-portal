const router = require("express").Router();
const feedbackController = require("../controller/feedbackController");

router.post("/add", feedbackController.addFeedback);

module.exports = router;
