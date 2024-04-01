// To start with mongo db first we have follow the given steps:
  // 1) install mongo-db.
  // 2) install mongoosejs.
    // install : npm i mongoose
  // 3) require and setup connection.
  // 4) make schema.
  // 5) create model and export.

// 3) require and setup connection (this will create a database)
// require :
const mongoose = require('mongoose');
// setup connection.
  // to setup connection we have to use connect method from mongoose and we have to pass the database name (like mongodb) with its route and with our database name(like users) using port 27017 that is the default port of mongodb.
  // the structure will be:
    // "name://host:port/databaseName"
mongoose.connect("mongodb://127.0.0.1:27017/users");


// 4) make schema.
  // to make schema we have to use schema method from mongoose and we have to pass an object as an argument.This object will contain the names(like cols in sql dbs) as a key and the types of names as values.
  // this will return a schema object(a normal object) that we can store in a variable to use it later on.
const userSchema = mongoose.Schema({
  name: String, 
  username: String,
  age: Number, 
})

// 5) create model and export.
  // to create model we have to use model method from mongoose.It takes two arguments, first one is the name of model(collection) and second one is the schema object.
module.exports = mongoose.model('user', userSchema); // now go to the index.js file to use.