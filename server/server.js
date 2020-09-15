const express = require('express')
const bodyParser = require('body-parser');
const axios = require('axios')
require('dotenv').config()
const app = express()
const port = 8080
const { createAthlete, updateAthlete, deleteAthlete, findAthlete } = require('../db/controllers/athlete.js')
const db = require('../db/index.js')

app.use('/', express.static('dist'))
app.use(bodyParser.json());

app.get('/calendar/:start/:end', (req, res) => {
  let start = req.params.start;
  let end = req.params.end;
  if (start < Date.now()) {
    axios.get(`https://www.strava.com/api/v3/athlete/activities?before=${end}&after=${start}&per_page=100`, {
      headers: {
        'Authorization': process.env.STRAVA_TOKEN
      }
    })
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error)
      res.send([])
    })
  } else {
    res.send([])
  }
})

app.get('/:athlete/read', (req, res) => {
   findAthlete(req.params.athlete, (response) => {
     res.send(response)
   })
})

app.post('/:athlete/create', (req, res) => {
  updateAthlete(req.params.athlete, req.body.name, req.body.raceDate, (response) => {
    res.send(response)
  })
})

app.put('/:athlete/modify', (req, res) => {
  updateAthlete(req.params.athlete, req.body.name, req.body.raceDate, (response) => {
    res.send(response)
  })
})

app.delete('/:athlete/delete', (req, res) => {
  deleteAthlete(req.params.athlete, (response) => {
    res.send(response)
  })
})










app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})