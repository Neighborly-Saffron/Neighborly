const connectionPool = require('../../db/pool.js')

const addPost = (request, response) => {
  // var userId = req.params.userId;
  var query = `INSERT INTO post (message, likes, userID, groupID) VALUES ($1, $2, $3, $4)`

  connectionPool
    .query(query, [request.body.post, request.body.likes, request.body.userId, request.body.groupId])
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error executing to add post', err.stack);
      response.status(500);
    });
}

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

module.exports = { addPost, getGroupDescription };