const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const creatorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  information: {
    type: String
  }
});

module.exports = mongoose.model('Creator', creatorSchema);

