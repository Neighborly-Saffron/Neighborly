const connectionPool = require('../../db/pool.js')

const getUserGroups = (request, response) => {
  // var userId = req.params.userId;
  // should query with userId
  var query = 'SELECT name, description, pictureURL, adminId from "groups" INNER JOIN "usergroups" on groups.id = usergroups.id_user';

  connectionPool
    .query(query)
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error executing to get related products', err.stack);
      response.status(500);
    });
}

module.exports = { getUserGroups };