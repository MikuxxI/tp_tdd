const express = require('express');
const tddDB = require('./config/tddDB');
const router = require('./routes/routes')
const app = express()
const port = 3000

app.use(express.json());
app.use('/router', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})