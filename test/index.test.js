const axios = require('axios');

const url = (url) => `http://127.0.0.1:3000${url}`;

beforeEach(() => {
  await Livre.
});

describe('Librairie', () => {
  describe('creation', () => {
    test('error', async () => {
      const res = await axios.post(url('/livre'))
      expect(res.status).toBe(200)
    })
  })
})