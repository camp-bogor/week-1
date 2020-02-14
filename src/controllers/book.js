const bookModel = require('../models/book')
module.exports = {
  getAll: async (request, response) => {
    try {
      const searchName = request.query.name || ''
      const result = await bookModel.getAll(searchName)
      response.json(result)
    } catch (error) {
      console.log(error)
    }
  },
  
}
