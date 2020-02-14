const express = require('express')
const Route = express.Router()

const bookRouter = require('./book')
const userRoute = require('./user')

Route
  .use('/book', bookRouter)
  .use('/user', userRoute)

module.exports = Route
