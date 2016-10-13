// means that ES6+ will be usable in all subsequent files
require('babel-core/register');

// './db' exports a promise, we want to wait until DB is connected before starting our app
// because our routes use our DB models
require('./db').default.then(() => {
  // process.argv gives access what the user has entered into the command line
  require(`./commands/${process.argv[2]}`);
}).catch(error => console.log(error));
