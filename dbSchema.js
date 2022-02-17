const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
let dbName = "b30wd";
let dbUrl = `mongodb+srv://Vishwas:vishwas123@cluster0.uimm1.mongodb.net/${dbName}`;
module.exports = { dbUrl, mongodb, MongoClient };
