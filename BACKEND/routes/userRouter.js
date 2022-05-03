const router = require("express").Router();
const userController = require("../controller/userController");

router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/all_info", userController.getAllUserInfo);

router.get("/info/:nid", userController.getUserInfo);

router.delete("/delete/:nid", userController.deleteUser);

router.get("/:qualification", userController.qualification);

router.get("/:nid/contact", userController.getContact);

router.put("/verify/:nid", userController.verifyUser);

module.exports = router;
