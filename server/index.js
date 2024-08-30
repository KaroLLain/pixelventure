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
const contactRoute = require('./contactRoute');

const app = express();

// Configure CORS to allow requests from your client-side domain
app.use(cors({
origin: 'https://pixelventures-client-karollains-projects.vercel.app/'
}));

app.use(express.json());

app.use('/', contactRoute);

app.use('/', (req, res) => {
res.send('Server is running');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server listening to port ${port}`));

// Error handling middleware
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Something broke!');
});