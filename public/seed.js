var mongoose = require("mongoose");

/*Mongoose Connection */ 
var db = 'mongodb://localhost/wk19meanstack';
mongoose.connect(db);

var User = require('./model/user');
var Item = require('./model/item');
var Comment = require('./model/comment');

// to create a User
var user1 = new User({
  name: 'Mean Precious Metal Gram Collector',
  money: 1000,
  password: "stackthegrams",
  collected: ['GoldGram', 'SilverGram', 'Bitcoin']
});

// inside of saving the user 
user1.save(function(err){
  if(err) return(err);

// for creating comments within user save
var comment1 = new Comment({
  commentMsg: "I'm stacking precious grams!",
  _owner: user1.id,
  itemLink:"Precious Gram1"
});

var comment2 = new Comment ({
  commentMsg:"I like precious grams!",
  _owner: user1.id,
  itemLink: "Precious Gram2"
});

comment1.save(function(err){
  if (err) return (err);
});

}); 