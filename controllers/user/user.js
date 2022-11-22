const connectionPool = require('../../db/pool.js')

const addNewUser = (req, res) => {

  let query = `INSERT INTO users (authid, name, bio, pictureurl)
  VALUES ('${req.body.authId}', '${req.body.name}', '${req.body.bio}', '${req.body.pictureUrl}')
  ON CONFLICT (authid) DO NOTHING;
  `

  connectionPool.query(query)
    .then((data) => res.status(200).end())
    .catch((err) => console.log(err))
}

module.exports = { addNewUser }
