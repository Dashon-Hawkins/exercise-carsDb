var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Cars'});
});

router.get('/cars', function(req, res, next) {
  knex.raw("SELECT * FROM cars").then(function(payload) {
    res.render('index', {
      title: 'Cars',
      data: payload.rows });
  });
});

//GET
router.get('/add/:id', function(req, res, next) {
  knex.raw("SELECT * FROM cars WHERE id=?", [req.params.id]).then(function(payload) {
    res.json(payload.rows);
  })
});

router.get('/edit/:id', function(req, res, next) {
  knex.raw(`SELECT * from cars WHERE id=${req.params.id}`).then(function(payload){
    res.json(payload.rows);
  })
});

module.exports = router;
