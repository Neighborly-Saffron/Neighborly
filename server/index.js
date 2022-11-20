const groups = require('../controllers/group/groups.js')
const path = require("path");

const express = require('express')
const app = express()
app.use(express.json())


const port = 3001


app.use(express.static(path.join(__dirname, '../public')));

app.get('/usergroups/:userId', groups.getUserGroups);


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})