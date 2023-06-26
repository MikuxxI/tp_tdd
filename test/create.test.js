const axios = require('axios');
const livreSeeds = require('./seeders/livres.seeds.js');
const Livre = require('../models/Livre');
const message = require('../global/message.js');

const url = (url) => `http://127.0.0.1:3000${url}`;

beforeAll(async () => {
  await Livre.destroy({ where: {} });
});

describe('Librairie', () => {
  describe('Creation', () => {
    test('Success', async () => {
      const res = await axios.post(url('/livre'), livreSeeds.isbn10)
      expect(res.status).toBe(200)
      expect(res.data).toBe(message.succesInsert);
      const newLivre = await Livre.findOne({ where: { isbn: livreSeeds.isbn10.isbn } });
      expect(newLivre).toMatchObject(livreSeeds.isbn10);
    })

    test('Validator isbn body type', async () => {
      try {
        await axios.post(url('/livre'), {...livreSeeds.isbn10, isbn: 123 })
      } catch (error) {
        expect(error.response.data).toBeTruthy()
        expect(error.response.status).toBe(400);      
        expect(error.response.data.errors[0].msg).toEqual(message.invalidType)
      }
    })

    test('Validator isbn as good value', async () => {
      try {
        await axios.post(url('/livre'), {...livreSeeds.isbn10, isbn: 'BD' })
      } catch (error) {
        expect(error.response.data).toBeTruthy()
        expect(error.response.status).toBe(400);      
        expect(error.response.data.errors[0].msg).toEqual(message.invalidType)
      }
    })

    test('Insertion to DB was failed', async () => {
      try {
        await axios.post(url('/livre'), livreSeeds.isbn10)
      } catch (error) {
        expect(e.response.status).toBeGreaterThanOrEqual(400);
        expect(error.response.status).toBe(400);      
        expect(error.response.data).toBeTruthy()
        expect(error.response.data.errors[0].msg).toEqual(message.invalidType)
      }
    })
  })
})