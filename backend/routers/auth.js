const express = require("express");
const router = express.Router();

const {
  signupPost,
  sendOTP_post,
  verifyOPT_post,
  refreshToken_post,
  logout_post,
} = require("../controllers/authController");
const authenticateUser = require("../middlewares/authMiddleware");
router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/signup", signupPost);
//sending the otp
router.post("/sendOTP", sendOTP_post);
//verifying the otp
router.post("/verifyOTP", verifyOPT_post);

//refershing the token
router.post("/refreshToken", refreshToken_post);
//protected route
router.get("/protected", authenticateUser, (req, res) => {
  res.send("protected route");
});

//Logut Route
router.get("/logout", logout_post);
module.exports = router;
