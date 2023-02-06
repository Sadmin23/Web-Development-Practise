const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb://0.0.0.0:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

const dbName = "fruitsDB";

async function run() {
  try {
    const database = client.db(dbName);
    const foods = database.collection("fruits");
    // create an array of documents to insert
    const docs = [
      { name: "Apple", score: 8, review: "Great fruit" },
      { name: "Orange", score: 6, review: "Kinda Sour" },
      { name: "Banana", score: 9, review: "Great stuff!" }
    ];
    // this option prevents additional documents from being inserted if one fails
    const options = { ordered: true };
    const result = await foods.insertMany(docs, options);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
