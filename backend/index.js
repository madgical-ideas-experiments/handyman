const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routers/auth.js");
const servicesRoutes = require("./routers/service.js");
const userRoutes = require("./routers/user.js");
const dotenv = require("dotenv");
const authenticateUser = require("./middlewares/authMiddleware.js");
dotenv.config();

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(typeof req.headers.cookie);
  const accessToken = req.headers.cookie.split("=")[1];
  console.log(accessToken);
  res.send("Hello World");
});
const port = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URL;

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
//routes
app.use("/api/auth", authRoutes);
app.use("/api/service", authenticateUser, servicesRoutes);
app.use("/api/user", authenticateUser, userRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
