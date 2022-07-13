require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
console.log(path.join(__dirname, 'build'));
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

  app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })

  app.post('/', user);



  app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

