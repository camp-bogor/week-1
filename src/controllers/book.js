const bookModel = require('../models/book')
const miscHelper = require('../helpers')
const redisCache = require('../helpers/redisCache')

module.exports = {
  getAll: async (request, response) => {
    try {
      const searchName = request.query.name || ''
      const limit = request.query.limit || 25

      const key = `get-all-book-${searchName}-${limit}`
      const resultCache = await redisCache.get(key)

      if (resultCache) miscHelper.response(response, 200, resultCache)

      if (resultCache === null) {
        const result = await bookModel.getAll(searchName)
        await redisCache.set(key, result)
        miscHelper.response(response, 200, result)
      }
    } catch (error) {
      console.log(error)
      miscHelper.customErrorResponse(response, 404, 'Internal server error!')
    }
  },
  getDetail: async (request, response) => {
    try {
      const bookId = request.params.bookId
      const key = `get-book-detail-${bookId}`
      const result = await bookModel.getDetail(bookId)
      response.json(result)
    } catch (error) {
      console.log(error)
    }
  },
  insertData: async (request, response) => {
    try {
      const key = 'get-all-book'
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

      const result = await bookModel.insertData(data)
      await redisCache.del(key)
      response.json(result)
    } catch (error) {
      console.log(error)
    }
  }
}
