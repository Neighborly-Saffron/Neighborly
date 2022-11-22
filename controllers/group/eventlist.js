const connectionPool = require('../../db/pool.js')

const getGroupEvents = (request, response) => {
  var query = `
    SELECT json_build_object
      (
        'name', name,
        'location', location,
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

const checkAttending = (request, response) => {
  let userID = request.params.userid
  let eventID = request.params.eventid

  var query = `
    SELECT EXISTS(SELECT 1 FROM attending WHERE id_user=$1 AND id_event=$2)
  `
//WILL NEED TO ADD ACTUAL GROUP SPECIFIC REQUEST- THIS IS JUST DATA TEST
  connectionPool
    .query(query, [userID, eventID])
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error checking attending', err.stack);
      response.status(500);
    });
}

const attendEvent = (request, response) => {
  let userID = request.body.userID
  let eventID = request.body.eventID

  var query = `INSERT INTO attending (id_user, id_event) VALUES ($1, $2)`

//WILL NEED TO ADD ACTUAL GROUP SPECIFIC REQUEST- THIS IS JUST DATA TEST
  connectionPool
    .query(query, [userID, eventID])
    .then(res => response.send())
    .catch(err => {
      console.error('Error checking attending', err.stack);
      response.status(500);
    });
}

const cancelAttend = (request, response) => {
  let userID = request.body.userID
  let eventID = request.body.eventID

  var query = `DELETE FROM attending WHERE id_user = $1 AND id_event = $2`

//WILL NEED TO ADD ACTUAL GROUP SPECIFIC REQUEST- THIS IS JUST DATA TEST
  connectionPool
    .query(query, [userID, eventID])
    .then(res => response.send())
    .catch(err => {
      console.error('Error checking attending', err.stack);
      response.status(500);
    });
}

module.exports = { getGroupEvents, checkAttending, attendEvent, cancelAttend };