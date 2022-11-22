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

module.exports = { addPost };