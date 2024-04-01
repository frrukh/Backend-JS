var express = require('express');
var router = express.Router();

/* GET home page. */
// Flash messages:
  // after setting up the express-sessoin and connect-flash packeges we can use flash.
  
// 1) Creation:
  // to create flash we can use a function from req to set a flash against that request.
    // req.flash()
    // this function takes two arguments. 1) name and 2) value
router.get('/', function(req, res, next) {
  req.flash("err", "Some error occured!😐") // flash seted with name err.
  req.flash("errtype", "syntax error"); // can also create multiple flashes.
  res.render('index');
});

// 2) Reading:
  // reading is exactly the same as creation but in req.flash() we have to pass a single argument i.e the name of the flash. it will return the value of that flash in an array.
    // just like: ['Some error occured!😐']

  // if we created the flash 2 times with same name it will create flash like: 
    // ['Some error occured!😐', 'Some error occured!😐', 'Some error occured!😐']

router.get('/check', function(req, res){
  console.log(req.flash("err"), req.flash("errtype"));
  res.send("check kr lo backend ky terminal pe....😐");
})

module.exports = router;
