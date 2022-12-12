const express = require('express')
const router = express.Router()
const feed = require('../controllers/feed/feed.js')
const comments = require('../controllers/feed/comment.js')

router.get('/posts/home/:userId/:groupId', feed.getHomeFeed)
router.get('/posts/profile/:userId/:groupId', feed.getProfileFeed)
router.get('/posts/group/:userId/:groupId', feed.getGroupFeed)
router.post('/addPost', feed.addPost)
router.delete('/posts', feed.deletePost)
router.put('/posts', feed.likePost)
router.put('/unlikepost', feed.unlikePost)
router.get('/comments/:postId', comments.getComments)
router.post('/comment', comments.addComment)

module.exports = router