const groups = require('../controllers/group/groups.js')
const groupSearch = require('../controllers/group/groupSearch.js')
const groupPage = require('../controllers/group/groupPage.js')
const feed = require('../controllers/feed/feed.js')
const profile = require('../controllers/profile/profile.js')
const addGroup = require('../controllers/addGroup/addGroup.js')
const groupEvent = require('../controllers/group/eventlist.js')
const path = require("path");

const express = require('express')
const app = express()
app.use(express.json())

const port = 3001

app.use(express.static(path.join(__dirname, '../public')));


//Don't uncomment this, it's some devil sh*t

// app.get('/*', function(req, res) {
//   res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// })

app.get('/usergroups/:userId', groups.getUserGroups);

//feed routes
app.get('/posts/home', feed.getHomeFeed);
app.get('/posts/profile', feed.getProfileFeed);
app.get('/posts/group', feed.getGroupFeed);
app.put('/posts', feed.likePost);

//add group
app.post('/newGroup', addGroup.insertGroup)

//detailed group list/search routes
app.get('/getGroups', groupSearch.getInitialGroups);
app.post('/searchGroups', groupSearch.searchGroups);
app.post('/requestJoin', groupSearch.requestGroup);

//profile routes
app.get('/profile/bio',profile.getUserProfile)

// individual group page routes
app.post('/addPost', groupPage.addPost)

//group event
app.get('/events', groupEvent.getGroupEvents)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})