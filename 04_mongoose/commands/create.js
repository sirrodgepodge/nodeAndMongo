import mongoose from 'mongoose';
import dbInit from '../db';

dbInit.then(function() {
  // pull 'Something' model off mongoose, works because Node uses singletons for imports/requires!!!
  const Something = mongoose.model('Something');

  return (new Something({ aString: 'I am a string that will be saved' })).save();
}).then(function() {
  console.log('saved something!');
  mongoose.connection.close();
}).catch(function(error) {
  console.log(error);
});
