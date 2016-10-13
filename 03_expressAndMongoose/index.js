// means that ES6+ will be usable in all subsequent files
require('babel-core/register');

// './db' exports a promise, we want to wait until DB is connected before starting our app
// because our routes use our DB models
require('./db').default.then(() => {
  // start our actual app
  // Note: if we just specify a directory with require,
  // this will select 'index.js' from that directory
  require('./server');
});
