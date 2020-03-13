const express = require('express')
const Route = express.Router()

const { getAll } = require('../controllers/product')

Route
  .get('/', getAll)

module.exports = Route
