import mongoose from 'mongoose';
import dbInit from '../db';

dbInit.then(function() {
  // pull 'Something' model off mongoose, works because Node uses singletons for imports/requires!!!
  const Something = mongoose.model('Something');

  return Something.find();
}).then(function(result) {
  console.log(`look what I found: \n ${result}`);
  mongoose.connection.close();
}).catch(function(error) {
  console.log(error);
});
