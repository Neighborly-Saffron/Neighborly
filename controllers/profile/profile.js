const connectionPool = require('../../db/pool.js')

const getUserProfile = (req, res) => {
  
  const query = `SELECT name FROM users WHERE authId = `
}