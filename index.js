const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')

app.listen(8001, () => console.log('\n This server is running'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (request, response) => {
  response.json({name: 'Tatas Fachrul'})
})

app.post('/', (request, response) => {
  const name = request.body.name

  response.json({name})
})
