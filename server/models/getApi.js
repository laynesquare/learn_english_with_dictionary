import mongoose from 'mongoose';

const apiSchema = mongoose.Schema({
  key: String,
});

var NytApi = mongoose.model('nytapi', apiSchema);

export default NytApi;
