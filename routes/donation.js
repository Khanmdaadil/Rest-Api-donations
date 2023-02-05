const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Donation = require('../models/donation');

router.post('/donate', (req, res) => {
  const { currency, amount, name, message, toCreator } = req.body;

  Donation.create({ currency, amount, name, message, toCreator }, (err, donation) => {
    if (err) return res.status(500).send('Error on the server.');
    if (!donation) return res.status(404).send('Donation not saved.');

    res.status(200).send({ message: 'Donation saved successfully' });
  });
});

module.exports = router;
