const express = require('express')
const Route = express.Router()

const { authentication, authorization } = require('../helpers/auth')
const { getAll, getDetail, insertData } = require('../controllers/book')

Route
  .get('/', getAll)
  .get('/:bookId', getDetail)
  .post('/', insertData)
  .patch('/:bookId')
  .delete('/:bookId')

module.exports = Route
