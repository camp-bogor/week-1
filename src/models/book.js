const connection = require('../configs/mysql')

module.exports = {
  getAll: (searchName) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM book WHERE name LIKE '%${searchName}%'`, (error, result) => {
        if (error) reject(new Error(error))
        resolve(result)
      })
    })
  }
}
