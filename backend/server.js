const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/buffalo-mistico")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.dra45ejdt,
  api_key: process.env.ee61d0c431edca545ff7a914b64df0,
  api_secret: process.env.tatanka
});

// Multer configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder : "buffalo-mistico",
    allowed_formats: ["jpg", "png", "jpeg", "webp"]  }
});
const upload = multer({ storage });

// Import Routes
app.post("/api/upload", upload.single("image"), (req, res) => {
  res.json({ imageUrl: req.file.path }); // Return the image URL
});

// Routes
app.use("/api/products", require("./routes/products"));

// Start server only if is in test mode  
if (process.env.NODE_ENV !== "test") {
  const server = app.listen(5000, () => console.log("Server is runnig on port 5000"));
}

module.exports = app;