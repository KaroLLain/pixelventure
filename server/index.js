// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");

// const corsOptions ={
//   origin:'https://www.pixelventure.eu', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200
// }

// const path = require("path");
// const contactRoute = require("./contractRoute");

// const app = express();

// app.use(express.json());
// app.use(cors(corsOptions));

// app.use("/", contactRoute);

// app.use("/", (req, res)=>{
//   res.send("Server is running")
// })

// const port = process.env.PORT || 5000;
// app.listen(port, console.log(`server listing to port 5000 only`));




require("dotenv").config();
const express = require("express");
const cors = require("cors");

const corsOptions = {
origin: 'https://www.pixelventure.eu',
credentials: true, // access-control-allow-credentials:true
optionSuccessStatus: 200
};

const path = require("path");
const contactRoute = require("./contactRoute"); // Ensure this matches your file name

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.use("/", contactRoute);

app.use("/", (req, res) => {
res.send("Server is running");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));