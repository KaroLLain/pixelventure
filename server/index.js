// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const contactRoute = require("./contractRoute");

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.use("/", contactRoute);

// app.use("/", (req, res)=>{
//   res.send("Server is running")
// })

// const port = process.env.PORT || 5000;
// app.listen(port, console.log(`server listing to port 5000 only`));

require('dotenv').config();
const cors = require('cors');
const express = require('express');
// const path = require('path');
const contactRoute = require('./contractRoute');

const app = express();

app.use(cors()); // Allow all origins for testing purposes
app.use(express.json());

app.use('/', contactRoute);

app.use('/', (req, res) => {
res.send('Server is running');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server listening to port ${port}`));

// const corsOptions = {
//   origin: 'https://www.pixelventure.eu', // Your frontend's origin
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204
//   };
  
//   app.use(cors(corsOptions));
//   app.use(express.json());
  
//   app.use('/', contactRoute);
  
//   app.use('/', (req, res) => {
//   res.send('Server is running');
//   });

//   app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://www.pixelventure.eu');
//     res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     next();
//     });
  
//   const port = process.env.PORT || 5000;
//   app.listen(port, console.log(`server listening to port ${port}`));
//   app.options('*', cors(corsOptions)); // Enable pre-flight across-the-board