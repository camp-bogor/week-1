const express = require('express')
const Route = express.Router()

const { getAll } = require('../controllers/book')

Route
  .get('/', getAll)

module.exports = Route
