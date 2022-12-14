const connectionPool = require('../../../db/pool.js')

const getUserGroups = (request, response) => {
  var userId = request.params.userId;
  var query = `
    SELECT json_build_object
      (
        'groupId', id,
        'name', name,
        'description', description,
        'pictureURL', pictureURL,
        'adminId', adminId
      )
      FROM groups WHERE groups.id = ANY (SELECT id_group FROM usergroups WHERE id_user = $1)
  `

  connectionPool
    .query(query, [userId])
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error executing to get users groups', err.stack);
      response.status(500);
    });
}

module.exports = { getUserGroups };