const connectionPool = require('../../db/pool.js')

const addNewUser = (req, res) => {

  let query = `INSERT into users (authId, name, bio, pictureUrl)
  SELECT 'andrew dye', 'andrew dye'
  WHERE NOT EXISTS (SELECT id from users WHERE name = 'andrew dye')
  RETURNING id;`
}