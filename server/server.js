require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const path = require("path");
const contactRoute = require("./contractRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", contactRoute);

app.use("/", (req, res)=>{
  res.send("Server is running")
})

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server listing to port 5000 only`));