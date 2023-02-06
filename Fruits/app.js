const { MongoClient } = require("mongodb");

const url =
  "mongodb://0.0.0.0:27017";

const dbName = "fruitsDB";

MongoClient.connect(url).then((client) => {
  
  const connect = client.db(dbName);

  // Connect to collection
  const collection = connect
      .collection("fruits");

  collection.find({}).toArray().then((ans) => {
      console.log(ans);
  });
}).catch((err) => {

  // Printing the error message
  console.log(err.Message);
})
