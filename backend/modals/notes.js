const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: { type: String, required: false },
  description: { type: String, required: false },
  date: { type: String, required: false },
  name: { type: String, required: false },
});

const Notes = mongoose.model('Notes', NoteSchema);

module.exports = Notes;
