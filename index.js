const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const mainNavigation = require('./src/routes')

app.listen(8001, () => console.log('\n This server is running'))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', mainNavigation)

// app.get('/', (request, response) => {
//   const searchName = request.query.name || ''
//   connection.query(`SELECT * FROM book WHERE name LIKE '%${searchName}%'`, (error, result) => {
//     if (error) console.log(error)
//     response.json(result)
//   })
// })

// app.get('/:bookId', (request, response) => {
//   const bookId = request.params.bookId
//   console.log(bookId)

//   connection.query('SELECT * FROM book WHERE id = ?', bookId, (error, result) => {
//     if (error) console.log(error)
//     response.json(result)
//   })
// })

// app.post('/', (request, response) => {
//   const data = {
//     name: request.body.name,
//     writer: request.body.writer,
//     description: request.body.description,
//     publisher: request.body.publisher,
//     year: request.body.year,
//     stock: request.body.stock,
//     genre: request.body.genre,
//     created_at: new Date(),
//     updated_at: new Date()
//   }
//   connection.query('INSERT INTO book SET ?', data, (error, result) => {
//     if (error) console.log(error)
//     response.json(result)
//   })
// })

// app.patch('/:bookId', (request, response) => {
//   const bookId = request.params.bookId

//   const data = {
//     name: request.body.name,
//     writer: request.body.writer,
//     description: request.body.description,
//     publisher: request.body.publisher,
//     year: request.body.year,
//     stock: request.body.stock,
//     genre: request.body.genre,
//     updated_at: new Date()
//   }

//   connection.query('UPDATE book SET ? WHERE id = ?', [data, bookId], (error, result) => {
//     if (error) console.log(error)
//     response.json(result)
//   })
// })

// app.delete('/:bookId', (request, response) => {
//   const bookId = request.params.bookId
//   connection.query('DELETE FROM book WHERE id = ?', bookId, (error, result) => {
//     if (error) console.log(error)
//     response.json(result)
//   })
// })
