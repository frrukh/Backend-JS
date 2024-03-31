var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=>{
  res.send('<h1>Welcome to Kulfa</h1>')
})

router.get('/home', (req, res, next)=>{
  res.render('index')
})

module.exports = router;
