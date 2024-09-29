import { MongoClient } from "mongodb";

import { dbConfig } from "./db-config.js";
const { url, dbName } = dbConfig;
const client = new MongoClient(url);
async function app() {
  try {
    await client.connect();
    console.log("Connected to the server.");
    const db = client.db(dbName);
    const col = db.collection("people");
    let personDocument = {
      name: { first: "Alan", last: "Turing" },
      birth: new Date(1912, 5, 23),
      death: new Date(1954, 5, 7),
      contribs: ["Turing machine", "Turing test", "Turingery"],
    };
    await col.updateOne(
      { first: "Alan", last: "Turing" },
      { $set: personDocument },
      { upsert: true }
    );
    const allResults = await collection.find({}).toArray();
    console.log(allResults);
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
}

app();
