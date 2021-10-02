const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri =
  'mongodb+srv://seher:seher123@cluster0.uimx8.mongodb.net/Diary?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connected');
});

const DiaryRouter = require('./routes/diary');
const ListRouter = require('./routes/lists');
const NoteRouter = require('./routes/notes');
const ReminderRouter = require('./routes/reminder');
const OthersRouter = require('./routes/others');

app.use('/diary', DiaryRouter);
app.use('/list', ListRouter);
app.use('/note', NoteRouter);
app.use('/reminder', ReminderRouter);
app.use('/others', OthersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
