const express = require('express')
const router = express.Router()
const getGroups = require('../controllers/group/groups.js')
const addGroup = require('../controllers/addGroup/addGroup.js')
const groupPage = require('../controllers/group/groupPage.js')

router.get('/user/:userId', getGroups.getUserGroups)
router.post('/newGroup', addGroup.insertGroup)
router.post('/addToGroup', addGroup.addToGroup)
router.get('/description/:groupId', groupPage.getGroupDescription)

module.exports = router