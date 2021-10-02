const router = require('express').Router();
let Diary = require('../modals/diary');

router.route('/').get((req, res) => {
  Diary.find()
    .then((diary) => res.json(diary))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const date = req.body.date;
  const name = req.body.name;

  const newDiary = new Diary({
    title,
    description,
    date,
    name,
  });

  newDiary
    .save()
    .then(() => res.json('Diary added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Diary.findById(req.params.id)
    .then((diary) => res.json(diary))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Diary.findByIdAndDelete(req.params.id)
    .then(() => res.json('Diary deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Diary.findById(req.params.id)
    .then((diary) => {
      diary.title = req.body.title;
      diary.description = req.body.description;
      diary.date = req.body.date;
      diary.name = req.body.name;

      diary
        .save()
        .then(() => res.json('Diary updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
