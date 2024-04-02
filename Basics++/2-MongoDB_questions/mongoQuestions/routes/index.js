var express = require('express');
var router = express.Router();
const userModel = require('./users');


router.get('/', async function(req, res) {
  const new_user = await userModel.create({
    name: "mongodb",
    username : null,
    intrests : ["css", "fasion", "photography"],
  });
  res.send(new_user);
});

router.get('/find', async function(req, res) {
  const all_users = await userModel.find();
  res.send(all_users);
});

router.get('/delete', async function(req, res) {
  const deleted_user = await userModel.findOneAndDelete({name: "harsh"});
  res.send(deleted_user);
});

// 1) CASE-INSENSITIVE search in mongo-db.
  // to search case insensitively we can use RegExp() function in which we pass the string for which we need case insensitivety and in second parameter we pass "i" that is the keyword for insensitive.
  // it'll return a regular expression object .
  // now we can pass this object as an argument for find function to find case insensitively.
  // like : modelname.find({name : regularExpressionObject})

  // but there is a problem i.e it will find all the users that starts with harsh and ends with harsh.
    // in mongo db ^ denotes the start and $ denotes the end.
  // to resolve this we can pass the first argument to RegExp() function, starting from ^ and ending at $.
router.get("/search", async function(req, res) {
  const regularExpression = RegExp("^hArSh$", "i"); 
  const search_user = await userModel.find({name: regularExpression});
  res.send(search_user);
});

// 2) intrests is an array in our case. Find on the basis of a single intrest.
router.get("/intrest", async function(req, res) { 
  const search_user = await userModel.find({intrests : {$all : ['fasion', 'css']}});
  res.send(search_user);
});


// 3) search user created in specific date range.
  // gte :  >=  
  // lte : <= 
router.get('/date', async function(req, res) {
  const date1 = new Date("2024-04-01");
  const date2 = new Date("2024-04-03");
  const users = await userModel.find({date : {$gte: date1, $lte: date2}});
  res.send(users);
});

// 4) Check if the document has a specific field or not.
  // filter out the documents who have the username field even if it is null.
  // the users do't have the username field will not come.
router.get("/exist", async function(req, res) {
  const users_having_username = await userModel.find({username: {$exists : true}});
  res.send(users_having_username);
})

// 5) filter document baised on the length of a specific field.
router.get('/length',async function(req, res) {
  let user = await userModel.find({
    $expr : {
      $and : [
        {$gte : [{$strLenCP : "$name"}, 4]},
        {$lte : [{$strLenCP : "$name"}, 7]}
      ]
    }
  })
  res.send(user);
});

module.exports = router;
