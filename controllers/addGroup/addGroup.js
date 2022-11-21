const connectionPool = require('../../db/pool.js')

const insertGroup = (request, response) => {
  var query = `INSERT INTO groups (name, description, pictureurl, adminid) VALUES ($1, $2, $3, $4)`

  connectionPool
    .query(query, [request.body.name, request.body.description, request.body.picURL, request.body.adminid])
    .then(res => response.send())
    .catch(err => {
      console.error('Error executing to add group', err.stack);
      response.status(500);
    });
}

module.exports = { insertGroup };