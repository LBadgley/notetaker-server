const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 1,
    maxLength: 160,
    required: true
  },
  body: {
    type: String,
    maxLength: 1028,
    // required: true
  }
});

module.exports = mongoose.model('Note', noteSchema);
