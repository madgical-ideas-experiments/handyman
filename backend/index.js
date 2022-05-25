const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.js");
const dotenv = require("dotenv");
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
app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
