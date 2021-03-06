var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var logger = require("morgan");
var bcrypt = require("bcryptjs");
var PORT = process.env.PORT || 6000;
var app = express();

//this is for logger and for using public folder
app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

//this is for connecting to database
var db = "mongodb://localhost/meanstack";
mongoose.connect(db);
var User = require("./models/user.js");
var Review = require("./models/review.js");
var Item = require("./models/item.js");

// for routing
app.get("/", function(req, res){
  res.sendFile(process.cwd() + "public/index.html");
});

app.post("/createUser", function(req, res){
  var newUser = new User (req.body);
  newUser.save(function(err, newUser){
    if (err){
      console.log(err);
      res.send(err);
    } else {
      res.send(newUser);
    }
  });
});

app.post("/login", function(req, res){
  User.findOne ({
    "username": req.body.username
  })
  .exec(function(err, user){
    if (err){
      console.log("error");
      res.send(err);
    } else{
      console.log(user);
      res.send(user);
    }
  })
});

app.post("/addItem", function(req, res) {
  console.log(req.body);
  var newItem = new Item(req.body);
  newItem.save(function(err, newItem) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(newItem);
    }
  });
});








//this is as far as I got for today for now. This should be further completed.

//for listening for PORT
app.listen(PORT, function(){
  console.log("LISTENING ON %s", + PORT);
});