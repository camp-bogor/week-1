const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'tatas',
  password: '@dm1n',
  database: 'dev_sample'
})

connection.connect((error) => {
  if (error) console.log(error)
  console.log('Database connected!')
})

module.exports = connection
