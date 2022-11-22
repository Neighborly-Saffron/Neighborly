const connectionPool = require('../../db/pool.js')

const addNewUser = (req, res) => {

  let query = `INSERT into users (authId, name, bio, pictureUrl)
  SELECT '${req.body.authId}', '${req.body.name}', '${req.body.bio}', '${req.body.pictureUrl}'
  WHERE NOT EXISTS (SELECT authId FROM users WHERE authId = '${req.body.authId}');`

  connectionPool.query(query)
    .then((data) => res.status(200).end())
    .catch((err) => console.log(err))
}

module.exports = { addNewUser }
