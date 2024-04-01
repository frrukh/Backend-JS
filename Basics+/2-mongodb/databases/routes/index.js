var express = require('express');
var router = express.Router();
// getting user Model that we just created and exported from users.js file.
const userModel = require('./users');

// NOW WE ARE GOING TO LEART CRUD.

router.get('/', function(req, res, next) {
  res.send('HOME');
});

// 1) Create:
  // to create first we need a model(that we just imported from users.js file) in which we will create a new document.
  // then we have to call a function from model called create.
  // the create() function takes an object as an argument in which we will pass the same names, that we created earlier while creating the schema,as keys and their values according to the datatypes that we provided earlier while creating schema.
  // create function return the created document.

// ****************************************************************
// WARNING: the functions of models are of asynchronous nature, so we need to handle them asynchronously.
// we can create async function and then use await before these functions in order to response correctly to the user.
// if we not handle it , for example in below case: the message will be sent to the user that user created and if there was an error to create documend and the user did not create so we do't handle it.
// ****************************************************************

router.get('/create', async function(req, res, next) {
  const new_user = await userModel.create({
    name: "Farrukh5",
    age: 12,
    username: "Wilson",
  })
  res.send(new_user); // {} if not use asynchronous function.
});


// 2) Read:
// to read the data we can use find() function from model.
// find function returns an array.
// find() function will return all the docuemnts.

// to make a filter on finding documents we can pass an object to find function as an argument in which we can write our filter like: modelname.find({age: 12, username: "xyz"})
// incase there is no user according to your filter it will return an empty array [].

// to find a single document we can use findOne() function.
// findOne function returns an object.
// this will give the first document from the collection.
// we can also add filter to findOne() just like we added on find()
// incase there is no user according to your filter it will return null that will not show on screen but you can log it on console.

router.get('/find', async function(req, res){
  const users = await userModel.find(); // null if the filtered document doesn't exist. 
  console.log(users)
  res.send(users);
})


// 3) Delete:
  // findOneAndDelete() function is used to select a document and delete it.
  // we can also pass arguments to add filter, else it will delete the first one.
  // it will return the deleted document.

  // deleteMany() function is used to delete many documents.
  // we can also pass arguments to add filter, else it will delete all the documents.
  // it will return an object: { "acknowledged": true, "deletedCount": 11 }
    // in this object acknowledged indecates that if the delete operation was successful or not.
    // where deleteCount shows the number of documents that were deleted.

router.get('/delete', async function(req, res){
  // number of documents before deletion.
  {
    const current = await userModel.find()
    console.log(current.length)
  }
  
  const deleted = await userModel.deleteMany({age: 123})
  // const deleted = await userModel.findOneAndDelete()

  // nubmer of documents after deletion.
  {
    const currenta = await userModel.find()
    console.log(currenta.length)
  }
  res.send(deleted)
});


module.exports = router;