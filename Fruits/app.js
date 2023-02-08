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
  rating: 7,
  review: "Very yummy!" 
});

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit."
})

// pineapple.save();

const person = new Person ({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple
});

person.save();

//fruit.save();

// const kiwi = new Fruit ({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best fruit!" 
// });

// const orange = new Fruit ({
//   name: "Orange",
//   rating: 4,
//   review: "Too sour for me" 
// });

// const banana = new Fruit ({
//   name: "Banana",
//   rating: 3,
//   review: "Weird texture" 
// });

// Fruit.insertMany([fruit, kiwi, orange, banana], function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully added data");
//   }
// });

Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  } else {

    fruits.forEach(fruit=>{
      console.log(fruit.name);
    });

    mongoose.connection.close();
  }
});

// Fruit.updateOne({_id: "63e3cecc6e6a1175e26fc8b9"}, {name: "Peach"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully updated database!");
//   }
// });

// Fruit.deleteOne({_id: "63e3cecc6e6a1175e26fc8b9"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully deleted from database!");
//   }
// });
// Fruit.deleteOne({_id: "63e3d0c1b1c53b3202940147"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully deleted from database!");
//   }
// });

// Person.deleteMany({name: "John"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully deleted from database!");
//   }
// });