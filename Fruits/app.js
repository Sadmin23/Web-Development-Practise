const { MongoClient } = require("mongodb");
const assert = require("assert")

const url =
  "mongodb://0.0.0.0:27017";

const dbName = "fruitsDB";

const client = new MongoClient(url);

async function run() {
  try {
    const database = client.db(dbName);
    const movies = database.collection("fruits");

    // query for movies that have a runtime less than 15 minutes
//    const query = { runtime: { $lt: 15 } };

    const options = {
      // sort returned documents in ascending order by title (A->Z)
  //    sort: { title: 1 },
      // Include only the `title` and `imdb` fields in each returned document
      projection: { _id: 0, name: 1, score: 1, review: 1},
    };

    const cursor = movies.find(options);

    // print a message if no documents were found
    if ((await cursor.count()) === 0) {
      console.log("No documents found!");
    }

    // replace console.dir with your callback to access individual elements
    await cursor.forEach(console.dir);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
