const router = require('express').Router();
let Lists = require('../modals/lists');

router.route('/').get((req, res) => {
  Lists.find()
    .then((list) => res.json(list))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const date = req.body.date;
  const name = req.body.name;

  const newList = new Lists({
    title,
    description,
    date,
    name,
  });

  newList
    .save()
    .then(() => res.json('Lists added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Lists.findById(req.params.id)
    .then((list) => res.json(list))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Lists.findByIdAndDelete(req.params.id)
    .then(() => res.json('Lists deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Lists.findById(req.params.id)
    .then((list) => {
      list.title = req.body.title;
      list.description = req.body.description;
      list.date = req.body.date;
      list.name = req.body.name;

      list
        .save()
        .then(() => res.json('Lists updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
