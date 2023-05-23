const express = require('express')
const router = express.Router()
const Livre = require('../models/Livre');
const message = require('../global/message');

router.post('/', async (req, res) => {
  await Livre.create(req.body);
  return res.status(200).send(message.succesInsert);
});

module.exports = router;