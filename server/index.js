const groups = require('../controllers/group/groups.js')
const groupSearch = require('../controllers/group/groupSearch.js')
const feed = require('../controllers/feed/feed.js')
const path = require("path");

const express = require('express')
const app = express()
app.use(express.json())

const port = 3001

app.use(express.static(path.join(__dirname, '../public')));

app.get('/usergroups/:userId', groups.getUserGroups);

//feed routes
app.get('/posts', feed.getHomeFeed);
app.put('/posts', feed.likePost);

//detailed group list/search routes
app.get('/getGroups', groupSearch.getInitialGroups)
// app.post('/searchGroups', groupSearch.searchGroups);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})