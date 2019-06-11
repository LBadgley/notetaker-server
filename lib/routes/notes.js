const { Router } = require('express');
const Note = require('../models/Note');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { title, body } = req.body;
    console.log('rtretretre', req.body);
    Note
      .create({ title, body })
      .then(note => res.send(note))
      .catch(next);
  });
