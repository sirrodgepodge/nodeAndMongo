import express from 'express';
import logger from 'morgan-body'; // express middleware
import routesHandler from './routes'; // app routes handler

// initialize express app
const app = express();

// hook logger to express app, thing that shows incoming requests in console
logger(app);

// routes
routesHandler(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// will print stacktrace
app.use((err, req, res) => {
  res.status(err.status || 400);
  res.render('error', {
    message: err.message,
    error: err,
  });
});

// begin listening for requests, i.e. initialize server
app.listen(3000, () =>
  console.log('app up and running at http://localhost:3000')); // eslint-disable-line no-console
