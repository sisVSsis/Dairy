const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DiarySchema = new Schema({
  title: { type: String, required: false },
  description: { type: String, required: false },
  date: { type: String, required: false },
  name: { type: String, required: false },
});

const Diary = mongoose.model('Diary', DiarySchema);

module.exports = Diary;
