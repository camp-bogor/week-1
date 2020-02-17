const bookModel = require('../models/book')
const miscHelper = require('../helpers')
module.exports = {
  getAll: async (request, response) => {
    try {
      const searchName = request.query.name || ''
      const result = await bookModel.getAll(searchName)
      miscHelper.response(response, 200, result)
    } catch (error) {
      console.log(error)
      miscHelper.customErrorResponse(response, 404, 'Internal server error!')
    }
  },
  getDetail: async (request, response) => {
    try {
      const bookId = request.params.bookId
      const result = await bookModel.getDetail(bookId)
      response.json(result)
    } catch (error) {
      console.log(error)
    }
  },
  insertData: async (request, response) => {
    try {
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
      response.json(result)
    } catch (error) {
      console.log(error)
    }
  }
}
