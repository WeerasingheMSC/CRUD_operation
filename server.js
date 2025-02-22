require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require('./moduls/product.module')
const productRoute = require("./routes/product.routes.js")
const app = express();

// middleware
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

//routes
app.use("/api/products",productRoute);

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing! Please set it in the .env file.");
  process.exit(1); // Exit the application if MONGO_URI is not set
}

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
