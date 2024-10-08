require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require("./contactRoute");

const corsOptions = {
origin: 'https://www.pixelventure.eu',
credentials: true,
optionsSuccessStatus: 200
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.use("/", contactRoute);

app.use("/", (req, res) => {
res.send("Server is running");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));