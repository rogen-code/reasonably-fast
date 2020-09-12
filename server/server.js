const express = require('express')
const axios = require('axios')
require('dotenv').config()
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/calendar', (req, res) => {
  axios.get('https://www.strava.com/api/v3/athlete/activities', {
    headers: {
      'Authorization': process.env.STRAVA_TOKEN
    }
  })
  .then((response) => {
    console.log(response.data);
    res.send(response.data)
  })
  .catch((error) => {
    res.sendStatus(500)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})