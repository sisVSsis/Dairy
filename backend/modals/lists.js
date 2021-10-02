const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ListSchema = new Schema({
  title: { type: String, required: false },
  description: { type: String, required: false },
  date: { type: String, required: false },
  name: { type: String, required: false },
});

const Lists = mongoose.model('Lists', ListSchema);

module.exports = Lists;
