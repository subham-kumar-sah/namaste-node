const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://subham007:ZfplT9C8G298g0XS@namastenode.pfmwhe2.mongodb.net/";
const client = new MongoClient(url);
const dbName = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  //insert data
  //   const insertData = await collection.insertOne({
  //     firstName: "Rahul",
  //     lastName: "Tiwari",
  //     city: "Bangalore",
  //     phone: "9876343210",
  //   });

  //Update data
  //   const updateData = await collection.updateOne(
  //     { firstName: "Indrani" },
  //     { $set: { city: "Mumbai" } }
  //   );

  //Delete data
  //const deleteData = await collection.deleteOne({ lastName: "Tiwari" });

  //Read data
  const findResult = await collection.find({ firstName: "Rahul" }).toArray();
  console.log("Found documents =>", findResult);

  const countResult = await collection.countDocuments();
  console.log("Total documents in collection =>", countResult);

  return "done.";
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
