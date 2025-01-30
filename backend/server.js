const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/buffalo-mistico")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// Routes
app.use("/api/products", require("./routes/products"));

// Start server only if is in test mode  
if (process.env.NODE_ENV !== "test") {
  const server = app.listen(5000, () => console.log("Server is runnig on port 5000"));
}

module.exports = app;