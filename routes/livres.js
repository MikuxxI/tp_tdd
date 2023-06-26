
const { body, validationResult } = require('express-validator');
const express = require('express');
const router = express.Router();
const Livre = require('../models/Livre');
const message = require('../global/message');
const Format = require('../models/Format');
const { validateISBN } = require('../services/isbnService');

router.post('/',
  body('isbn').isString(),
  body('isbn').custom((value) => {
    console.debug(value);
    // if (!validateISBN(value)) {
    //   throw new Error(message.invalidType);
    // }
    // return true;
  }),
  body('titre').isString(),
  body('auteur').isString(),
  body('editeur').isString(),
  body('format').isString(),
  body('format').isIn([Format.BROCHE, Format.GRANDFORMAT, Format.POCHE]),
async (req, res) => {
  const errors = validationResult(req);

  // validation
  if (!errors.isEmpty()) {
    return res.status(400).json(
      { errors: errors.array() }
    );
  }

  console.debug(req.body);

  try {
    await Livre.create(req.body);
    return res.status(200).send(message.succesInsert);
  } catch (error) {
    return res.status(500).json({ error: message.errorInsertion });
  }
});

router.get('/', async (req, res) => {
  try {
    const livres = await Livre.findAll();
    return res.status(200).send(livres);
  } catch (error) {
    return res.status(500).json({ error: message.errorInsertion });
  }
});

router.get(':id', async (req, res) => {
  try {
    console.debug('req', req.params);
    const livre = await Livre.findByPk(req.params.id);
    if (!livre) {
      return res.status(404);
    }
    return res.status(200).send(livre);
  } catch (error) {
    return res.status(500).json({ error: message.errorInsertion });
  }
});

module.exports = router;