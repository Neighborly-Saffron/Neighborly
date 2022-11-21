const connectionPool = require('../../db/pool.js')

const getHomeFeed = (request, response) => {
  var query = `SELECT json_build_object(
                    'postid', id,
                    'message', message,
                    'likes', likes,
                    'groupname', (SELECT name FROM groups WHERE id=groupid),
                    'username', (SELECT name FROM users WHERE id=userid),
                    'pictureurl', (SELECT pictureurl FROM users WHERE id=userid)
                                        )FROM post`;

  connectionPool
    .query(query)
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error getting home feed', err.stack);
      response.status(500);
    });
}

const likePost = (request, response) => {
  var query = `UPDATE post
               SET likes = likes + 1
               WHERE id = ${request.body.postid}`;

  connectionPool
    .query(query)
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error liking post', err.stack);
      response.status(500);
    });
}

module.exports = { getHomeFeed, likePost };