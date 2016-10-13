import mongoose, { Schema } from 'mongoose';

const SomethingSchema = new Schema({
  aString: String,
});

mongoose.model('Something', SomethingSchema);
