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

module.exports = { getComments };