import express from 'express';
import logger from 'morgan-body'; // express middleware

// initialize express app
const app = express();

// hook logger to express app, thing that shows incoming requests in console
logger(app);

// wait for 5 seconds if this route is hit
app.get('/wait', function(req, res, next) {
  setTimeout(function toBeRunLater() { // eslint-disable-line prefer-arrow-callback
    console.log('I waited 5 seconds'); // eslint-disable-line no-console
    next();
  }, 5000);
});

// allow specifying
app.get('/waitfor/:time', function(req, res, next) {
  const timeConvertedToMilliseconds = req.params.time * 1000;
  setTimeout(function toBeRunLater() {
    console.log(`I waited ${req.params.time} seconds`);
    next();
  }, timeConvertedToMilliseconds);
});

// get all messages
app.get('/*', function(req, res) {
  res.send('hello sucka');
});

// begin listening for requests, i.e. initialize server
app.listen(3000, () =>
  console.log('app up and running at http://localhost:3000')); // eslint-disable-line no-console
