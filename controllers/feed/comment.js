const connectionPool = require('../../db/pool.js')

//the most recent posts from all of the user’s various groups
const getComments = (request, response) => {
  let postId = request.params.postId

  var query = `SELECT json_build_object(
                    'commentid', id,
                    'message', message,
                    'likes', likes,
                    'postedat', posted_at,
                    'postid', postid,
                    'username', (SELECT name FROM users WHERE id=userid),
                    'pictureurl', (SELECT pictureurl FROM users WHERE id=userid)
                                        )FROM comment WHERE postid = $1 ORDER BY posted_at DESC`;

  connectionPool
    .query(query, [postId])
    .then(res => {
      response.send(res.rows)
    })
    .catch(err => {
      console.error('Error getting comment feed', err.stack);
      response.status(500);
    });
}

//{ commentText, likes: 0, userId, postId: postData.postId }
const addComment = (request, response) => {
  console.log(request.body)
  let message = request.body.commentText
  let likes = request.body.likes
  let userId = request.body.userId
  let postId = request.body.postId

  console.log(message, likes, userId, postId)

  var query = 'INSERT INTO comment (message, likes, userid, postid) VALUES ($1, $2, $3, $4)'

  connectionPool
    .query(query, [message, likes, userId, postId])
    .then(res => {
      response.send()
    })
    .catch(err => {
      console.error('Error posting comment', err.stack);
      response.status(500);
    });
}

module.exports = { getComments, addComment };