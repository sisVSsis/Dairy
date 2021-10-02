const router = require('express').Router();
let Reminder = require('../modals/reminder');

router.route('/').get((req, res) => {
  Reminder.find()
    .then((reminder) => res.json(reminder))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const date = req.body.date;
  const name = req.body.name;

  const newReminder = new Reminder({
    title,
    description,
    date,
    name,
  });

  newReminder
    .save()
    .then(() => res.json('Reminder added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Reminder.findById(req.params.id)
    .then((reminder) => res.json(reminder))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Reminder.findByIdAndDelete(req.params.id)
    .then(() => res.json('Reminder deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Reminder.findById(req.params.id)
    .then((reminder) => {
      reminder.title = req.body.title;
      reminder.description = req.body.description;
      reminder.date = req.body.date;
      reminder.name = req.body.name;

      reminder
        .save()
        .then(() => res.json('Reminder updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
