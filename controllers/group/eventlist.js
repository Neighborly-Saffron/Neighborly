const connectionPool = require('../../db/pool.js')

const getGroupEvents = (request, response) => {
  let groupId = request.params.groupid

  var query = `
    SELECT json_build_object
      (
        'name', name,
        'location', location,
        'description', description,
        'pictureURL', pictureURL,
        'eventid', id
      )
      FROM event WHERE groupid = $1
  `

  connectionPool
    .query(query, [groupId])
    .then(res => response.send(res.rows))
    .catch(err => {
      console.log('Error executing to get related products', err.stack);
      response.status(500);
    });
}

const checkAttending = (request, response) => {
  let userID = request.params.userid
  let eventID = request.params.eventid

  var query = `
    SELECT EXISTS(SELECT 1 FROM attending WHERE id_user=$1 AND id_event=$2)
  `

  connectionPool
    .query(query, [userID, eventID])
    .then(res => response.send(res.rows))
    .catch(err => {
      console.log('Error checking attending', err.stack);
      response.status(500);
    });
}

const attendEvent = (request, response) => {
  let userID = request.body.userID
  let eventID = request.body.eventID

  var query = `INSERT INTO attending (id_user, id_event) VALUES ($1, $2)`

  connectionPool
    .query(query, [userID, eventID])
    .then(res => response.send())
    .catch(err => {
      console.log('Error checking attending', err.stack);
      response.status(500);
    });
}

const cancelAttend = (request, response) => {
  let userID = request.body.userID
  let eventID = request.body.eventID

  var query = `DELETE FROM attending WHERE id_user = $1 AND id_event = $2`

  connectionPool
    .query(query, [userID, eventID])
    .then(res => response.send())
    .catch(err => {
      console.log('Error checking attending', err.stack);
      response.status(500);
    });
}

module.exports = { getGroupEvents, checkAttending, attendEvent, cancelAttend };