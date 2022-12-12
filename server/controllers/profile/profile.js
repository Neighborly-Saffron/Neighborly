const connectionPool = require('../../../db/pool.js')

const getUserProfile = (req, res) => {
  const userId = req.query.userId;
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