const express = require('express')
const router = express.Router()
const groupSearch = require('../controllers/group/groupSearch.js')

router.get('/getGroups', groupSearch.getInitialGroups)
router.post('/search', groupSearch.searchGroups)
router.post('/requestJoin', groupSearch.requestGroup)

module.exports = router