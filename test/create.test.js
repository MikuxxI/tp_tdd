const axios = require('axios');
const livreSeeds = require('./seeders/livres.seeds.js');
const Livre = require('../models/Livre');
const message = require('../global/message.js');

const url = (url) => `http://127.0.0.1:3000${url}`;

beforeAll(async () => {
  await Livre.destroy({ where: {} });
});

describe('Librairie', () => {
  test('Success', async () => {
    const res = await axios.post(url('/livre'), livreSeeds.isbn10)
    expect(res.status).toBe(200)
    expect(res.data).toBe(message.succesInsert);
    const newLivre = await Livre.findOne({ where: { isbn: livreSeeds.isbn10.isbn } });
    expect(newLivre).toMatchObject(livreSeeds.isbn10);
  })

  describe('Error', () => {
    test('Insertion to DB was failed', async () => {
      try {
        await axios.post(url('/livre'), livreSeeds.isbn10)
      } catch (error) {
        expect(error.response.status).toBe(400);      
        expect(error.response.data).toBeTruthy()
        expect(error.response.data.errors[0].msg).toEqual(message.invalidType)
      }
    })
  })

  describe.skip('Validator', () => {
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
        console.debug('error', error);
        expect(error.response.data).toBeTruthy()
        expect(error.response.status).toBe(400);      
        expect(error.response.data.errors[0].msg).toEqual(message.invalidType)
      }
    })

    test.only('ISBN 10 not Valide', async () => {
      try {
        await axios.post(url('/livre'), { ...livreSeeds.isbn10, isbn: '2714493231' })
      } catch (error) {
        console.debug(error)
        expect(error.response.data).toBeTruthy()
        expect(error.response.status).toBe(400);      
        expect(error.response.data.errors[0].msg).toEqual(message.invalidType)
      }
    })

    test('ISBN 13 not Valide', async () => {
      try {
        await axios.post(url('/livre'), { ...livreSeeds.isbn10, isbn: '978-3-16-148410-1' })
      } catch (error) {
        expect(error.response.data).toBeTruthy()
        expect(error.response.status).toBe(400);      
        expect(error.response.data.errors[0].msg).toEqual(message.invalidType)
      }
    })
  })
})