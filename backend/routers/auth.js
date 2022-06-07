const express = require("express");
const router = express.Router();

const {
  signupCustomerPost,
  sendOTP_post,
  verifyOPT_post,
  refreshToken_post,
  logout_post,
  signupSellerPost,
} = require("../controllers/authController");
const authenticateUser = require("../middlewares/authMiddleware");
router.get("/", (req, res) => {
  res.send("Hello World");
});
//signing up a new customer
router.post("/customer/signup", signupCustomerPost);
//signing up a new seller
router.post("/seller/signup", signupSellerPost);
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
