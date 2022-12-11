const express = require('express')
const router = express.Router()
const userProfile = require('../controllers/profile/profile.js')

router.get('/bio', userProfile.getUserProfile)

module.exports = router