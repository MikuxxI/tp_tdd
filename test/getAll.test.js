const axios = require('axios');
const livreSeeds = require('./seeders/livres.seeds.js');
const Livre = require('../models/Livre');
const message = require('../global/message.js');

const url = (url) => `http://127.0.0.1:3000${url}`;

describe('Librairie', () => {
  describe('first test', ()=> {
    expect(1).toBe(2);
  })
})