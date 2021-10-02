const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OtherSchema = new Schema({
  title: { type: String, required: false },
  description: { type: String, required: false },
  date: { type: String, required: false },
  name: { type: String, required: false },
});

const Others = mongoose.model('Others', OtherSchema);

module.exports = Others;
