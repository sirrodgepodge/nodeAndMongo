// means that ES6+ will be usable in all subsequent files
require('babel-core/register');

// start our actual app
// Note: if we just specify a directory with require,
// this will select 'index.js' from that directory
require('./server');
