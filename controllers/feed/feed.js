const connectionPool = require('../../db/pool.js')

//the most recent posts from all of the user’s various groups
const getHomeFeed = (request, response) => {
  var query = `SELECT json_build_object(
                    'postid', id,
                    'message', message,
                    'likes', likes,
                    'postedat', posted_at,
                    'groupname', (SELECT name FROM groups WHERE id=groupid),
                    'username', (SELECT name FROM users WHERE id=userid),
                    'pictureurl', (SELECT pictureurl FROM users WHERE id=userid)
                                        )FROM post WHERE groupid = ANY(SELECT id_group FROM usergroups WHERE id_user = 4)`;
//USER ID IS HARDCODED AND WILL NEED TO BE UPDATED
  connectionPool
    .query(query)
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error getting home feed', err.stack);
      response.status(500);
    });
}

//returns the most recent posts from that group
const getGroupFeed = (request, response) => {
  var query = `SELECT json_build_object(
                    'postid', id,
                    'message', message,
                    'likes', likes,
                    'postedat', posted_at,
                    'groupname', (SELECT name FROM groups WHERE id=groupid),
                    'username', (SELECT name FROM users WHERE id=userid),
                    'pictureurl', (SELECT pictureurl FROM users WHERE id=userid)
                                        )FROM post WHERE groupid = 1`;
//GROUP ID IS HARDCODED AND WILL NEED TO BE UPDATED
  connectionPool
    .query(query)
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error getting home feed', err.stack);
      response.status(500);
    });
}

//the most recent posts from all of the user’s various groups
const getProfileFeed = (request, response) => {
  var query = `SELECT json_build_object(
                    'postid', id,
                    'message', message,
                    'likes', likes,
                    'postedat', posted_at,
                    'groupname', (SELECT name FROM groups WHERE id=groupid),
                    'username', (SELECT name FROM users WHERE id=userid),
                    'pictureurl', (SELECT pictureurl FROM users WHERE id=userid)
                                        )FROM post WHERE userid = 1`;
//USER ID IS HARDCODED AND WILL NEED TO BE UPDATED
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

module.exports = { getHomeFeed, getGroupFeed, getProfileFeed, likePost };