const connectionPool = require('../../../db/pool.js')

const addNewUser = (req, res) => {

  let authId = req.body.authId;
  let name = req.body.name;
  let bio = req.body.bio;
  let pictureUrl = req.body.pictureUrl;

  let query = `INSERT INTO users (authid, name, bio, pictureurl)
  VALUES ($1, $2, $3, $4)
  ON CONFLICT (authid) DO NOTHING;
  `

  connectionPool.query(query, [authId, name, bio, pictureUrl])
    .then((data) => res.send(data))
    .catch((err) => console.log(err))
}

const getNewUser = (req, res) => {
  let authId = req.query.authId;
  connectionPool.query(`SELECT id FROM users WHERE authid = $1`, [authId])
  .then((data) => res.send(data))
  .catch((err) => console.log(err))
}

module.exports = { addNewUser, getNewUser }
