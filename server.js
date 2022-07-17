require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uri = process.env.REACT_APP_MONGO_URI;
const path = require('path');
// const fs = require('fs');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
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

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })

  app.get('/petFinderHome', async(req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

  app.get('/petfinder', async(req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

  app.get('/signOn', async(req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })

  app.get('/welcomeNewsletter', async(req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
  })
  // app.use("/", function (req, res, next) {
  //   res.redirect("/welcomeNewsletter");
  //   next();
  // });

  app.post('/signOn', user, (req, res) => {
    res.redirect('http://');
  });



  app.listen(process.env.REACT_APP_PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });

