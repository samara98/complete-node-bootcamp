const express = require('express');
const router = express.Router();

const usersRouter = require('./usersRouter');
const toursRouter = require('./toursRouter');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

router.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

router.use('/api/v1/users', usersRouter);
router.use('/api/v1/tours', toursRouter);

module.exports = router;
