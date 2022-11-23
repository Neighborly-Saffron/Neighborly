const connectionPool = require('../../db/pool.js')
const axios = require('axios');
require('dotenv').config();

const getEvents = (request, response) => {
  let userId = request.params.userId
  let groupId = request.params.groupId
  let idToCheck = userId;
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
  if(groupId !== '-1') {
    idToCheck = groupId;
    query = `
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
      FROM event WHERE groupid = $1
  `
  }
//WILL NEED TO ADD ACTUAL GROUP SPECIFIC REQUEST- THIS IS JUST DATA TEST
  connectionPool
  .query(query, [idToCheck])
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error executing to get related products', err.stack);
      response.status(500);
    });
}

const addEvent = (req, res) => {



  const addressToSend = `${req.body.address} ${req.body.city} ${req.body.state} ${req.body.zipCode}`.replace(/ /g, '+')
  console.log(addressToSend)

  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressToSend}&key=${process.env.googleAPI}`)
    .then((data) => {

      let query = `INSERT INTO event (name, location, lat, lng, date, time, description, pictureUrl, groupID, adminID)
      VALUES ('${req.body.name}', '${data.data.results[0].formatted_address}', '${data.data.results[0].geometry.location.lat}', '${data.data.results[0].geometry.location.lng}', '${req.body.date}', '${req.body.time}', '${req.body.description}', '${req.body.pictureUrl}', '${req.body.groupId}', '${req.body.adminId}')`

      connectionPool.query(query)
        .then((data) => {
          console.log('added to event table');
          res.status(200).end();
        })
        .catch((err) => {
          console.log('Error adding to event table', err.stack);
          res.status(500).end();
        })
    })
    .catch((err) => {
      console.log('error in google call, ', err)
    })


}

module.exports = { getEvents, addEvent};
