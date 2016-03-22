var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var bcrypt = require("bcryptjs");
var PORT = process.env.PORT || 6000;
var app = express();

//this is for logger and for using public folder
app.use(logger("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyparser.json());

//this is for DB connection
var db = "mongodb://localhost/ownit";
mongoose.connect(db);
var User = require("./models/user.js");
var Review = require("./models/review.js");
var Item = require("./models/item.js");