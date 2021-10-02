const router = require('express').Router();
let Others = require('../modals/others');

router.route('/').get((req, res) => {
  Others.find()
    .then((other) => res.json(other))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const date = req.body.date;
  const name = req.body.name;

  const newOthers = new Others({
    title,
    description,
    date,
    name,
  });

  newOthers
    .save()
    .then(() => res.json('Others added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Others.findById(req.params.id)
    .then((other) => res.json(other))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Others.findByIdAndDelete(req.params.id)
    .then(() => res.json('Others deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Others.findById(req.params.id)
    .then((other) => {
      other.title = req.body.title;
      other.description = req.body.description;
      other.date = req.body.date;
      other.name = req.body.name;

      other
        .save()
        .then(() => res.json('Others updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
