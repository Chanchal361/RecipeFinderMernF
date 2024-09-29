const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDb = require("./config/db");
dotenv.config({});
const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Routes 
const ItemRoutes=require("./routes/ItemRoutes")
app.use("/api",ItemRoutes)

const categoryControllers=require("./routes/categoryRoutes")
app.use("/api",categoryControllers)

app.listen(port, () => {
  connectDb(); // Connect to the MongoDB database
  console.log(`Server is running on port ${port}`);
});
