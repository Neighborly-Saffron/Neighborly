const connectionPool = require('../../db/pool.js')
console.log('it got in profile.js')


const getUserProfile = (req, res) => {
  const userId = req.query.userId;
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
        'groups', (SELECT COUNT(*) FROM usergroups WHERE id_user = $1),
        'admins', (SELECT COUNT(*) FROM groups WHERE groups.adminid = $1)
      ) AS profile
      FROM users WHERE users.id = $1
  `

  connectionPool
    .query(query, [userId])
      .then(result => {
        // console.log('result:', result)
        res.send(result.rows[0].profile)
      })
      .catch(err => {
        console.error('db failed to fetch users data', err);
        res.status(500);
        throw err;
      });
}


module.exports = {
  getUserProfile
 };