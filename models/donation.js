// Donation.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
  fromCreator: {
    type: Schema.Types.ObjectId,
    ref: 'Creator',
    required: true
  },
  toCreator: {
    type: Schema.Types.ObjectId,
    ref: 'Creator',
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  message: {
    type: String
  }
});

module.exports = mongoose.model('Donation', donationSchema);

