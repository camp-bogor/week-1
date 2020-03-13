const express = require('express')
const Route = express.Router()

const bookRouter = require('./book')
const userRoute = require('./user')
const productRoute = require('./product')

Route
  .use('/book', bookRouter)
  .use('/user', userRoute)
  .use('/product', productRoute)

module.exports = Route
