var express = require('express');
var router = express.Router();
const app = express()
const indexController = require('../src/controllers/indexController');
const { logger } = require("../config/winston"); // log

app.get('/',(req,res) => {
  res.send('server on')
});

app.listen(3001,() => {
  console.log("REAL ON")
});

/* GET home page. */
// js 함수 문법 (옛 형태로 통일 '=> ()' 아님XX)
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/map', function(req, res, next) {
  res.render('map');
});


router.get('/images', indexController.readImages);


module.exports = router;


