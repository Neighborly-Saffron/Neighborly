const express = require('express')
const router = express.Router()
const user = require('../controllers/user/user.js')

router.get('/', user.getNewUser)
router.post('/', user.addNewUser)

module.exports = router