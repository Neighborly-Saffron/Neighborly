const connectionPool = require('../../db/pool.js')

const insertGroup = (request, response) => {
  var query = `INSERT INTO groups (name, description, pictureurl, adminid) VALUES ($1, $2, $3, $4) RETURNING id`

  connectionPool
    .query(query, [request.body.name, request.body.description, request.body.picURL, request.body.adminid])
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error executing to add group', err.stack);
      response.status(500);
    });
}

module.exports = { insertGroup };