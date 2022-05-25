const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const cookieparser = require("cookie-parser");
const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN;
const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN;
const smsKey = process.env.SMS_SECRET_KEY;

router.get("/", (req, res) => {
  res.send("Hello World");
});
let refreshTokens = [];

router.post("/", async (req, res) => {
  const { mobileNumber } = req.body;
  try {
    const user = await User.findOne({ mobileNumber });
    console.log(user);
    if (user) {
      res.status(200).send({
        isVerified: true,
      });
    } else {
      res.status(200).send({
        isVerified: false,
      });
    }
  } catch (err) {
    res.status(400).send(err);
  }
});
router.post("/signup", async (req, res) => {
  const { mobileNumber, name, email } = req.body;
  try {
    const mobileUser = await User.findOne({ mobileNumber });
    if (mobileUser) {
      res.status(400).send({
        message: "Mobile number already exists",
      });
    }
    const emailUser = await User.findOne({ email });
    if (emailUser) {
      res.status(400).send({
        message: "Email already exists",
      });
    }
    const user = new User({
      mobileNumber,
      name,
      email,
    });
    await user.save();
    res.status(200).send({
      message: "User created successfully",
    });
  } catch (err) {
    res.status(400).send(err);
  }
});
//sending the otp
router.post("/sendOTP", (req, res) => {
  const phone = req.body.phone;
  const otp = Math.floor(100000 + Math.random() * 900000);
  const ttl = 2 * 60 * 1000;
  const expires = Date.now() + ttl;
  const data = `${phone}.${otp}.${expires}`;
  const hash = crypto.createHmac("sha256", smsKey).update(data).digest("hex");
  const fullHash = `${hash}.${expires}`;

  /* client.messages
    .create({
      body: `Your One Time Login Password For CFM is ${otp}`,
      from: twilioNum,
      to: phone,  
    })
    .then((messages) => console.log(messages))
    .catch((err) => console.error(err)); */
  // this bypass otp via api only for development instead hitting twilio api all the time
  res.status(200).send({ phone, hash: fullHash, otp });
  //res.status(200).send({ phone, hash: fullHash }); // Use this way in Production
});
//verifying the otp
router.post("/verifyOTP", async (req, res) => {
  const { phone, hash, otp } = req.body;
  let [hashValue, expires] = hash.split(".");
  let now = Date.now();
  if (now > parseInt(expires)) {
    res.status(504).send({
      message: "OTP expired",
    });
  }
  let data = `${phone}.${otp}.${expires}`;
  const newCalculatedHash = crypto
    .createHmac("sha256", smsKey)
    .update(data)
    .digest("hex");
  if (newCalculatedHash === hashValue) {
    console.log("user confirmed");
    const accessToken = jwt.sign({ data: phone }, JWT_AUTH_TOKEN, {
      expiresIn: "7d",
    });
    const refreshToken = jwt.sign({ data: phone }, JWT_REFRESH_TOKEN, {
      expiresIn: "1y",
    });
    refreshTokens.push(refreshToken);
    res
      .status(202)
      .cookie("accessToken", accessToken, {
        expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
        sameSite: "strict",
        httpOnly: true,
      })
      .cookie("refreshToken", refreshToken, {
        expires: new Date(new Date().getTime() + 31557600000),
        sameSite: "strict",
        httpOnly: true,
      })
      .cookie("authSession", true, {
        expires: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
        sameSite: "strict",
      })
      .cookie("refreshTokenID", true, {
        expires: new Date(new Date().getTime() + 31557600000),
        sameSite: "strict",
      })
      .send({ msg: "Device verified" });
  }
});

//refershing the token
router.post("/refreshToken", async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken) {
    res.status(400).send({
      message: "No refresh token provided",
    });
  }
  if (!refreshTokens.includes(refreshToken)) {
    res.status(400).send({
      message: "Invalid refresh token",
    });
  } else {
    jwt.verify(refreshToken, JWT_AUTH_TOKEN, (err, user) => {
      if (!err) {
        const accessToken = jwt.sign({ phone: user.phone }, JWT_AUTH_TOKEN, {
          expiresIn: "1h",
        });
        res
          .status(200)
          .cookie("accessToken", accessToken, {
            expires: new Date(Date.now() + 3600 * 1000),
            sameSite: "strict",
            httpOnly: true,
          })
          .cookie("authenticated", true, {
            expires: new Date(Date.now() + 3600 * 1000),
          });
      } else {
        res.status(400).send({
          message: "Invalid refresh token",
        });
      }
    });
  }
});
//protected route
router.get("/protected", authenticateUser, (req, res) => {
  res.send("protected route");
});
async function authenticateUser(req, res, next) {
  const accessToken = req.headers.cookie.split("=")[1].split(";")[0];
  console.log(accessToken);
  if (!accessToken) {
    return res.status(401).send({
      message: "No access token provided",
    });
  }

  jwt.verify(accessToken, JWT_AUTH_TOKEN, async (err, data) => {
    console.log(data);
    if (data) {
      req.data = data;
      next();
    } else if (err.message === "TokenExpiredError") {
      return res.status(403).send({
        success: false,
        msg: "Access token expired",
      });
    } else {
      console.log(err);
      return res.status(403).send({ err, msg: "User not authenticated" });
    }
  });
}
//Logut Route
router.get("/logout", (req, res) => {
  res
    .clearCookie("refreshToken")
    .clearCookie("accessToken")
    .clearCookie("authSession")
    .clearCookie("refreshTokenID")
    .send("logout");
});
module.exports = router;
