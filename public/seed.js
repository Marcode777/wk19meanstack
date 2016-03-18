var mongoose = require("mongoose");

/*Mongoose Connection */ 
var db = 'mongodb://localhost/wk19meanstack';
mongoose.connect(db);

var User = require('./model/user');
var Item = require('./model/item');
var Comment = require('./model/comment');

// to create a User
var user1 = new User({
  name: 'Mean Stacker',
  money: 100000,
  password: "stackthemup",
  collected: ['Gold', 'Silver', 'Bitcoin']
});

// inside of saving the user 
user1.save(function(err){
  if(err) return(err);
})