const connectionPool = require('../../../db/pool.js')

const getGroupDescription = (request, response) => {
  var groupId = request.params.groupId;
  var query = `
    SELECT json_build_object
      (
        'name', name,
        'description', description,
        'pictureURL', pictureURL,
        'adminId', adminId
      )
      FROM groups WHERE groups.id = $1
  `
  connectionPool
    .query(query, [groupId])
    .then(res => response.send(res.rows[0].json_build_object))
    .catch(err => {
      console.error('Error executing to add post', err.stack);
      response.status(500);
    });
}

module.exports = { getGroupDescription };