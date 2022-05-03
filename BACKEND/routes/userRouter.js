const router = require("express").Router();
const userController = require("../controller/userController");

router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/all_info", userController.getAllUserInfo);

router.get("/info/:nid", userController.getUserInfo);

module.exports = router;
