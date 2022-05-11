const router = require("express").Router();
const userController = require("../controller/userController");
const auth = require("../middleware/auth");
const upload = require("../middleware/fileUpload");
const authAdmin = require("../middleware/authAdmin");
const authRecruiter = require("../middleware/authRecruiter");

router.post("/register", userController.register);

router.post("/add_recruiter", userController.addRecruiter);

router.post("/login", userController.login);

//router.get("/refresh_token", userController.getAccessToken);

//router.get("/logout", userController.logout);

router.get("/all_info", auth, authRecruiter, userController.getAllUserInfo);

router.get("/info/:nid", auth, userController.getUserInfo);

router.delete("/delete/:nid", auth, authAdmin, userController.deleteUser);

router.put(
  "/update",
  auth,
  upload.array("certificates[]"),
  userController.updateUser
);

router.get(
  "/:qualification",
  auth,
  authRecruiter,
  userController.qualification
);

router.get("/:nid/contact", auth, userController.getContact);

router.put("/verify/:nid", auth, userController.verifyUser);

module.exports = router;
