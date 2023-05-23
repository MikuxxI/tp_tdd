const axios = require('axios');
const livreSeeds = require('./seeders/livres.seeds.js');
const Livre = require('../models/Livre');
const message = require('../global/message.js');

const url = (url) => `http://127.0.0.1:3000${url}`;

describe('Librairie', () => {
  describe('creation', () => {
    test('success', async () => {
      const res = await axios.post(url('/livre'), livreSeeds.isbn10)
      expect(res.status).toBe(200)
      expect(res.data).toBe(message.succesInsert);
      const newLivre = await Livre.findOne({ where: { isbn: livreSeeds.isbn10.isbn } });
      expect(newLivre).toMatchObject(livreSeeds.isbn10);
    })
  })
})