const groups = require('../controllers/group/groups.js')
const feed = require('../controllers/feed/feed.js')
const path = require("path");

const express = require('express')
const app = express()
app.use(express.json())

app.use(express.static(path.join(__dirname, '../public')));

app.get('/usergroups/:userId', groups.getUserGroups);

//feed routes
app.get('/posts', feed.getHomeFeed);
app.put('/posts', feed.likePost);

const port = 3000

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})