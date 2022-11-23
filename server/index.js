const groups = require('../controllers/group/groups.js')
const groupSearch = require('../controllers/group/groupSearch.js')
const groupPage = require('../controllers/group/groupPage.js')
const feed = require('../controllers/feed/feed.js')
const profile = require('../controllers/profile/profile.js')
const addGroup = require('../controllers/addGroup/addGroup.js')
const groupEvent = require('../controllers/group/eventlist.js')
const addNewUser = require('../controllers/user/user.js')
const adminGroup = require('../controllers/adminGroup/adminGroup.js')
const path = require('path');
const chat = require('./chat.js')
const socketIo = require('socket.io')
const http = require('http')
const mapEvents = require('../controllers/map/events.js')
const comments = require('../controllers/feed/comment.js')

const express = require('express')
const app = express()
const server = http.createServer(app)

app.use(express.json())

const port = 3001

const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
}) //in case server and client run on different urls

chat(io);

app.use(express.static(path.join(__dirname, '../public')));

app.get('/usergroups/:userId', groups.getUserGroups);

//feed routes
app.get('/posts/home/:userId', feed.getHomeFeed);
app.get('/posts/profile/:userId', feed.getProfileFeed);
app.get('/posts/group/:groupId', feed.getGroupFeed);
app.put('/posts', feed.likePost);
app.get('/comments/:postId', comments.getComments);
app.post('/comment', comments.addComment);

//add group
app.post('/newGroup', addGroup.insertGroup)
app.post('/addtoGroup', addGroup.addToGroup)

//detailed group list/search routes
app.get('/getGroups', groupSearch.getInitialGroups);
app.post('/searchGroups', groupSearch.searchGroups);
app.post('/requestJoin', groupSearch.requestGroup);

//profile route
app.get('/profile/bio', profile.getUserProfile)

//admin group route
app.get('/GroupAdmin',adminGroup.getAdminGroups)

//request-to-join groups route
app.get('/requestedGroups', adminGroup.getRequestedGroups)

// individual group page routes
app.get('/groupDescription/:groupId', groupPage.getGroupDescription)
app.post('/addPost', groupPage.addPost)

//map routes
app.get('/mapEvents/:userId/:groupId',mapEvents.getEvents);

//group event
app.get('/events', groupEvent.getGroupEvents)
app.get('/events/attending/:eventid/:userid', groupEvent.checkAttending)
app.post('/events/attend', groupEvent.attendEvent)
app.post('/events/cancel', groupEvent.cancelAttend)

//add new user
app.post('/user', addNewUser.addNewUser);
app.get('/user', addNewUser.getNewUser);

//add event
app.post('/newEvent', mapEvents.addEvent);

//MUST BE FINAL ROUTES, NO ROUTES BELOW THE STAR
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

server.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
