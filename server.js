require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;


const app = express();

app.use(express.static(__dirname));
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
    res.sendFile("https://edens-sketchbook.herokuapp.com");
  });

  app.post('/', user);



  app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

