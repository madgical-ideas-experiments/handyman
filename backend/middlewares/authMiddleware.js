async function authenticateUser(req, res, next) {
  const accessToken = req.headers.cookie.split("=")[1];
  
  if (!accessToken) {
    return res.status(401).send({
      message: "No access token provided",
    });
  }

  jwt.verify(accessToken, JWT_AUTH_TOKEN, async (err, phone) => {
    if (phone) {
      req.phone = phone;
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
module.exports = authenticateUser;
