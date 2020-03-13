const bookModel = require('../models/book')
const miscHelper = require('../helpers')
const redisCache = require('../helpers/redisCache')

module.exports = {
  getAll: async (request, response) => {
    try {
        console.log('test');

        const result = {
            message: 'Get All Product'
        }

        miscHelper.response(response, 200, result)

    } catch (error) {
      console.log(error)
      miscHelper.customErrorResponse(response, 404, 'Internal server error!')
    }
  }
}
