const express = require('express')
const router  = express.Router()

const axios = require('axios')

/* GET home page */
router.get('/', (req, res, next) => {
  const url = 'https://6y458uslg3.execute-api.eu-west-3.amazonaws.com/elixos/assets'
axios.get(url)
.then(response => res.json(response.data))
.catch(err => console.log('error', console.log(err)))
})

router.get('/entities', (req, res, next) => {
  const url = 'https://6y458uslg3.execute-api.eu-west-3.amazonaws.com/elixos/entities'
axios.get(url)
.then(response => res.json(response.data))
.catch(err => console.log('error', console.log(err)))
})

module.exports = router;
