const connectionPool = require('../../db/pool.js')

const getEvents = (request, response) => {
  let userId = request.params.userId
  var query = `
    SELECT json_build_object
      (
        'name', name,
        'location', location,
        'lat', lat,
        'lng', lng,
        'date', date,
        'time', time,
        'description', description,
        'pictureURL', pictureURL,
        'eventid', id,
        'groupID', groupID
      )
      FROM event WHERE groupid = ANY(SELECT id_group FROM usergroups WHERE id_user = $1)
  `
//WILL NEED TO ADD ACTUAL GROUP SPECIFIC REQUEST- THIS IS JUST DATA TEST
  connectionPool
  .query(query, [userId])
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error executing to get related products', err.stack);
      response.status(500);
    });
}
const getUserGroups = (request, response) => {
  var query = `
    SELECT json_build_object
      (
        'name', name,
        'location', location,
        'lat', lat,
        'lng', lng,
        'date', date,
        'time', time,
        'description', description,
        'pictureURL', pictureURL,
        'eventid', id
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

module.exports = { getEvents, getUserGroups};