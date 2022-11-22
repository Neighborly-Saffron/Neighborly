const connectionPool = require('../../db/pool.js')

const addNewUser = (req, res) => {

  let query = `INSERT INTO users (authid, name, bio, pictureurl)
  VALUES ('${req.body.authId}', '${req.body.name}', '${req.body.bio}', '${req.body.pictureUrl}')
  ON CONFLICT (authid) DO NOTHING;
  `

  connectionPool.query(query)
    .then((data) => res.send(data))
    .catch((err) => console.log(err))
}

const getNewUser = (req, res) => {
  connectionPool.query(`SELECT id from users WHERE authid = '${req.query.authId}'`)
  .then((data) => res.send(data))
  .catch((err) => console.log(err))
}

module.exports = { addNewUser, getNewUser }
