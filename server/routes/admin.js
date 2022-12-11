const express = require('express')
const router = express.Router()
const adminGroup = require('../controllers/adminGroup/adminGroup.js')

router.get('/groupAdmin', adminGroup.getAdminGroups)
router.get('/userRequests/:groupId', adminGroup.userRequests)
router.post('/userApprove', adminGroup.userApprove)
router.post('/userDecline', adminGroup.userDecline)

module.exports = router