const express = require('express')
const router = express.Router()
const groupEvent = require('../controllers/group/eventlist.js')
const mapEvent = require('../controllers/map/events.js')

router.get('/map/:userId/:groupId', mapEvent.getEvents)
router.post('/newEvent', mapEvent.addEvent)
router.get('/attending/:eventid/:userid', groupEvent.checkAttending)//
router.post('/attend', groupEvent.attendEvent)
router.post('/cancel', groupEvent.cancelAttend)

/* Not being used? */
//group event
router.get('/events/getlist/:groupid', groupEvent.getGroupEvents)

module.exports = router