const groups = require('../controllers/group/groups.js')
const groupSearch = require('../controllers/group/groupSearch.js')
const groupPage = require('../controllers/group/groupPage.js')
const feed = require('../controllers/feed/feed.js')
const profile = require('../controllers/profile/profile.js')
const addGroup = require('../controllers/addGroup/addGroup.js')
const groupEvent = require('../controllers/group/eventlist.js')
const addNewUser = require('../controllers/user/user.js')
const adminGroup = require('../controllers/adminGroup/adminGroup.js')
const path = require("path");

const express = require('express')
const app = express()
app.use(express.json())

const port = 3001

app.use(express.static(path.join(__dirname, '../public')));

app.get('/usergroups/:userId', groups.getUserGroups);

//feed routes
app.get('/posts/home', feed.getHomeFeed);
app.get('/posts/profile', feed.getProfileFeed);
app.get('/posts/group', feed.getGroupFeed);
app.put('/posts', feed.likePost);

//add group
app.post('/newGroup', addGroup.insertGroup)

//detailed group list/search routes
app.get('/getGroups', groupSearch.getInitialGroups)
app.post('/searchGroups', groupSearch.searchGroups);

//profile route
app.get('/profile/bio', profile.getUserProfile)

//admin group route
app.get('/GroupAdmin',adminGroup.getAdminGroups )

// individual group page routes
app.post('/addPost', groupPage.addPost)

//group event
app.get('/events', groupEvent.getGroupEvents)

//add new user
app.post('/user', addNewUser.addNewUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})