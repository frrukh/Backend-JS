var express = require('express');
var router = express.Router();

// SESSIONS:
  // for each request we can store each session so the session is in reauest parameter like: req.session
  // console.log(req.session)  // Session { cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }}
  // sessions are stored in the server and if the server restarts the sesions will deleted.

    // Three operation on session: 
      // create: req.session.koibhinaam = value;
      // read : req.session;
      // delete : req.session.destroy(function(err){});

  // so, as session is an object we can treet it as an object.

router.get('/', function(req, res, next) {
  console.log(req.session);
  res.render('index', { title: 'Express' });
});


// 1) Create : 
router.get('/add',function(req, res, next) {
  req.session.name = "Farrukh";

  console.log(req.session); // Session {cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true }, name: 'Farrukh'}

  res.send(`<h1>The name stored in session is ${(req.session.name).toString()}</h1>`);
});


// 2) Delete : 
  // to delete the session we can use req.session.destroy() function which exactly wroks like delete req.session it is more safe, also it takes a callback, in this callback we can accept an argument in which the error came if occurred.
router.get('/remove',function(req, res, next) {
  req.session.destroy(function(err){
    if (err) throw err;
    res.send('<h1>The session is removed</h1>')
  })
  console.log(req.session); // undefined
});




// COOKIES:
  // it is an object stored in borwsre.
    // three operations on cookies:
      // create: res.cookie(key, value)
      // read : req.cookies
      // delete : res.clearCookie 

// 1) Create: 
router.get('/create', function(req, res) {
  res.cookie("firstname" , "Farrukh")
  res.cookie("username" , "Wilson")
  res.cookie("lastname" , "Habeeb")
  res.send("cookie created")
})

// 2) Read:
router.get('/read', function(req, res) {
  console.log(req.cookies)
  res.send("Check out the console window")
})

// 3) Delete:
  // res.clearCookie() function will not do anything untill you pass an argument to it, i.e the key of the cookie you want to delete.
  // it takes just single argument. If you pass multiple it will delete first.
router.get('/delete', function(req, res) {
  res.clearCookie("firstname")
  res.send("cookie deleted")
});


module.exports = router;
