const axios = require('axios');
const livreSeeds = require('./seeders/livres.seeds.js');
const Livre = require("../models/Livre");
const message = require('../global/message.js');

const url = (url) => `http://127.0.0.1:3000${url}`;
beforeEach(async () => {
  await Livre.destroy({ where: {} });
});

describe('Fonctionnement de l\'API', () => {
  // describe('test Erreur', ()=> {
  //   expect(1).toBe(2);
  // })

  test('récupère un Livre', async ()=> {
    const livre = await Livre.create(livreSeeds.isbn10);
    const res = await axios.get(url(`/livre?id=${livre.dataValues.id}`));
    expect(res.data).toMatchObject([livreSeeds.isbn10]);
  })

  test('Ne trouve pas le livre', async () => {
    try {
      await axios.get(url('/livres?id=1'));
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.statusText).toBe(message.notFound);
    }
  });
})