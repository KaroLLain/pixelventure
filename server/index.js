require("dotenv").config();
const express = require("express");
const cors = require("cors");
const corsOptions ={
  origin:'https://www.pixelventure.eu', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = (req, res) => {
  const d = new Date()
  res.end(d.toString())
}

module.exports = allowCors(handler)

const path = require("path");
const contactRoute = require("./contractRoute");

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.use("/", contactRoute);

app.use("/", (req, res)=>{
  res.send("Server is running")
})

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server listing to port 5000 only`));

