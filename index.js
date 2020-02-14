const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tatas',
  password: '@dm1n',
  database: 'dev_sample'
})

connection.connect((error) => {
  if (error) console.log(error)
  console.log('Database connected!')
})

app.listen(8001, () => console.log('\n This server is running'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (request, response) => {
  connection.query('SELECT * FROM book', (error, result) => {
    if (error) console.log(error)
    response.json(result)
  })
})

app.post('/', (request, response) => {
  const data = {
    name: request.body.name,
    writer: request.body.writer,
    description: request.body.description,
    publisher: request.body.publisher,
    year: request.body.year,
    stock: request.body.stock,
    genre: request.body.genre,
    created_at: new Date(),
    updated_at: new Date()
  }
  connection.query('INSERT INTO book SET ?', data, (error, result) => {
    if (error) console.log(error)
    response.json(result)
  })
})
