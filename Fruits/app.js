//jshint esversion:6

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit." 
});

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

const Person = mongoose.model("Person", fruitSchema);

const person = new Person ({
  name: "John",
  rating: 37 
});

const kiwi = new Fruit ({
  name: "Kiwi",
  rating: 10,
  review: "The best fruit!" 
});

const orange = new Fruit ({
  name: "Orange",
  rating: 4,
  review: "Too sour for me" 
});

const banana = new Fruit ({
  name: "Banana",
  rating: 3,
  review: "Weird texture" 
});

Fruit.insertMany([fruit, kiwi, orange, banana], function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Successfully added data");
  }
})