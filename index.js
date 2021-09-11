const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 5051;
const { MongoClient } = require("mongodb");

app.use(cors());
app.use(bodyParser.json());

console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.DB_NAME);

app.get("/", (req, res) => {
  res.send("News Portal Database Runing.......");
});

// ==========================================
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8eoxg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  console.log("connection err", err);
  const Newscollection = client.db("News-portal").collection("CommonNews");
  // perform actions on the collection object
  console.log("Database Connected successfully");
  //   client.close();
});

// ==========================================

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
