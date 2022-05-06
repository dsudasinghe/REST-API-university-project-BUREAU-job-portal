const router = require("express").Router();
const userController = require("../controller/userController");
const auth = require("../middleware/auth");

router.post("/register", userController.register);

router.post("/login", userController.login);

router.post("/refresh_token", userController.getAccessToken);

router.get("/logout", userController.logout);

router.get("/all_info", auth, userController.getAllUserInfo);

router.get("/info/:nid", userController.getUserInfo);

router.delete("/delete/:nid", userController.deleteUser);

router.get("/:qualification", userController.qualification);

router.get("/:nid/contact", userController.getContact);

router.put("/verify/:nid", userController.verifyUser);

module.exports = router;
