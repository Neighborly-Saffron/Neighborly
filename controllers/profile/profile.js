const connectionPool = require('../../db/pool.js')

const getUserProfile = (req, res) => {
  console.log('it got in getUserProfile')
  console.log('req.params:', req.params)
  var userId = request.params.userId;
  // console.log('userId: ', userId)
  // const userId = request.params.userID;
  // console.log('it got in getUserProfile')
  // console.log('userID: ', userID)
  // res.sendStatus(201)

  // console.log('userId: ', userId)
  var query = `
    SELECT json_build_object
      (
        'name', name,
        'bio', bio,
        'pictureURL', pictureURL,
      )
      FROM users WHERE users.id = $1
  `

  connectionPool
    .query(query, [userId])
      .then(res => res.send(res.rows))
      .catch(err => {
        console.error('db failed to fetch users data', err);
        res.status(500);
        throw err;
      });
}


module.exports = { getUserProfile };