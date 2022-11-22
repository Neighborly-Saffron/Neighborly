const connectionPool = require('../../db/pool.js')

const getGroupEvents = (request, response) => {
  var query = `
    SELECT json_build_object
      (
        'name', name,
        'location', location,
        'description', description,
        'pictureURL', pictureURL
      )
      FROM event
  `
//WILL NEED TO ADD ACTUAL GROUP SPECIFIC REQUEST- THIS IS JUST DATA TEST
  connectionPool
    .query(query)
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error executing to get related products', err.stack);
      response.status(500);
    });
}

module.exports = { getGroupEvents };