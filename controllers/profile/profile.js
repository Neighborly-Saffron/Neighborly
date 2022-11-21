const connectionPool = require('../../db/pool.js')

const getUserProfile = (req, res) => {
  const query = `SELECT name FROM users WHERE authId = `
}

// const getUserGroups = (request, response) => {
//   var userId = request.params.userId;
//   // console.log('userId: ', userId)
//   var query = `
//     SELECT json_build_object
//       (
//         'name', name,
//         'description', description,
//         'pictureURL', pictureURL,
//         'adminId', adminId
//       )
//       FROM groups WHERE groups.id = ANY (SELECT id_group FROM usergroups WHERE id_user = $1)
//   `

//   connectionPool
//     .query(query, [userId])
//     .then(res => response.send(res.rows))
//     .catch(err => {
//       console.error('Error executing to get related products', err.stack);
//       response.status(500);
//     });
// }

