const express = require('express');
const tddDB = require('./config/tddDB');
const livres = require('./routes/livres')
const app = express()
const port = 3000

app.use(express.json());
// app.use('/livre', livres)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})