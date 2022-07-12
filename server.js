require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = express.Router();
const uri = process.env.REACT_APP_MONGO_URI;


const app = express();

app.use(express.static(__dirname ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const user = require("./src/models/registerUser");

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => {
    console.log("Connected to database.");
  })
  .catch(() => {
    console.error("Error connecting to the database.");
  });

  app.get("/", (req, res) => {
    res.sendFile("/Users/haejinjeong/Documents/webdev/edens-sketchbooks/src/pages/index.js");
  });

  app.post('/', user);



app.listen(process.env.REACT_APP_PORT, () => {
  console.log(`Listening on port ${process.env.REACT_APP_PORT}`);
});

