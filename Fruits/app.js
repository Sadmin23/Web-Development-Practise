const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb://0.0.0.0:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

const dbName = "fruitsDB";

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
