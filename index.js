const express = require('express');
const tddDB = require('./config/tddDB');
const Livre = require('./models/Livre');
const router = require('./routes/routes')
const app = express()
const port = 3000

app.use(express.json());
app.use('/livres', router)

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  const livres = await Livre.findAll()
  console.log('log', livres)
})