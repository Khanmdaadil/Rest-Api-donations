const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.post('/signup', (req, res) => {
  const { username, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).send({ message: 'Passwords do not match' });
  }

  User.findOne({ username }, (err, user) => {
    if (err) return res.status(500).send('Error on the server.');
    if (user) return res.status(409).send('Username already exists.');

    const hashedPassword = bcrypt.hashSync(password, 8);

    User.create({ username, password: hashedPassword }, (err, user) => {
      if (err) return res.status(500).send('There was a problem registering the user.');

      res.status(200).send({ message: 'User registered successfully' });
    });
  });
});

module.exports = router;
