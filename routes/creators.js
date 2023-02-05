const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Creator = require('../models/creator');

const ITEMS_PER_PAGE = 10;

router.get('/creators/:page', (req, res) => {
  const page = req.params.page || 1;

  Creator.find()
    .skip((page - 1) * ITEMS_PER_PAGE)
    .limit(ITEMS_PER_PAGE)
    .exec((err, creators) => {
      if (err) return res.status(500).send('Error on the server.');
      if (!creators) return res.status(404).send('No creators found.');

      res.status(200).send({
        creators,
        totalPages: Math.ceil(Creator.countDocuments() / ITEMS_PER_PAGE),
      });
    });
});

module.exports = router;
