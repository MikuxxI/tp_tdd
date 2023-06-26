const axios = require('axios');
const livreSeeds = require('./seeders/livres.seeds.js');
const Livre = require('../models/Livre');

const url = (url) => `http://127.0.0.1:3000${url}`;

beforeEach(async () => {
  await Livre.destroy({ where: {} });
});

describe('Fonctionnement de l\'API', () => {
  // describe('test Erreur', ()=> {
    //   expect(1).toBe(2);
    // })
    
    test('récupère la list des livres', async ()=> {
    await Livre.bulkCreate([
      livreSeeds.isbn10,
      livreSeeds.isbn13
    ]);
    const res = await axios.get(url('/livre'));

    expect(res.data).toMatchObject([
      livreSeeds.isbn10,
      livreSeeds.isbn13
    ]);
  })
})