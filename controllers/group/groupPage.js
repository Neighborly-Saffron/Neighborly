const connectionPool = require('../../db/pool.js')

const addPost = (request, response) => {
  // var userId = req.params.userId;
  var query = '';

  connectionPool
    .query(query)
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error executing to add post', err.stack);
      response.status(500);
    });
}

module.exports = { addPost };