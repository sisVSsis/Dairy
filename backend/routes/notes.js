const router = require('express').Router();
let Notes = require('../modals/notes');

router.route('/').get((req, res) => {
  Notes.find()
    .then((note) => res.json(note))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const date = req.body.date;
  const name = req.body.name;

  const newNote = new Notes({
    title,
    description,
    date,
    name,
  });

  newNote
    .save()
    .then(() => res.json('Notes added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Notes.findById(req.params.id)
    .then((note) => res.json(note))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Notes.findByIdAndDelete(req.params.id)
    .then(() => res.json('Notes deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Notes.findById(req.params.id)
    .then((note) => {
      note.title = req.body.title;
      note.description = req.body.description;
      note.date = req.body.date;
      note.name = req.body.name;

      note
        .save()
        .then(() => res.json('Notes updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
