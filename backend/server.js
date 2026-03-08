const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const leaveRoutes = require("./routes/leaveRoutes");

dotenv.config();

const app = express();

/*
MIDDLEWARE
*/

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

/*
DATABASE CONNECTION
*/

connectDB();

/*
ROUTES
*/

app.use("/api/auth", authRoutes);
app.use("/api/leaves", leaveRoutes);

/*
SERVER
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});