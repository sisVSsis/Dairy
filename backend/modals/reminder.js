const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReminderSchema = new Schema({
  title: { type: String, required: false },
  description: { type: String, required: false },
  date: { type: String, required: false },
  name: { type: String, required: false },
});

const Reminder = mongoose.model('Reminder', ReminderSchema);

module.exports = Reminder;
