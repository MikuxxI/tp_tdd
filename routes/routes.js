const express = require('express')
const router = express.Router()

router.get('/livres', async (req, res) => {
  try {
    const livres = await Livre.findAll();
    res.json(livres);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des livres.' });
  }
});

module.exports = router;