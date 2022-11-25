const connectionPool = require('../../db/pool.js')

//the most recent posts from all of the user’s letious groups
const getHomeFeed = (request, response) => {
  let userId = request.params.userId

  let query = `SELECT json_build_object(
                    'postid', id,
                    'message', message,
                    'likes', likes,
                    'postedat', posted_at,
                    'groupname', (SELECT name FROM groups WHERE id=groupid),
                    'groupid', groupid,
                    'username', (SELECT name FROM users WHERE id=userid),
                    'pictureurl', (SELECT pictureurl FROM users WHERE id=userid),
                    'hasliked', (SELECT EXISTS(SELECT 1 FROM userlikes WHERE id_user=$1 AND id_post=post.id))
                                        )FROM post WHERE groupid = ANY(SELECT id_group FROM usergroups WHERE id_user = $1) ORDER BY posted_at DESC`;

  connectionPool
    .query(query, [userId])
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error getting home feed', err.stack);
      response.status(500);
    });
}

//returns the most recent posts from that group
const getGroupFeed = (request, response) => {
  let groupId = request.params.groupId

  let query = `SELECT json_build_object(
                    'postid', id,
                    'message', message,
                    'likes', likes,
                    'postedat', posted_at,
                    'groupname', (SELECT name FROM groups WHERE id=groupid),
                    'groupid', groupid,
                    'username', (SELECT name FROM users WHERE id=userid),
                    'pictureurl', (SELECT pictureurl FROM users WHERE id=userid)
                                        )FROM post WHERE groupid = $1 ORDER BY posted_at DESC`;
//GROUP ID IS WRITTEN AS ONE AS A PROP, WILL NEED TO BE UPDATED WHEN IT IS PASSED TO GROUP
  connectionPool
    .query(query, [groupId])
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error getting group feed', err.stack);
      response.status(500);
    });
}

//the most recent posts from all of the user’s letious groups
const getProfileFeed = (request, response) => {
  let userId = request.params.userId

  let query = `SELECT json_build_object(
                    'postid', id,
                    'message', message,
                    'likes', likes,
                    'postedat', posted_at,
                    'groupname', (SELECT name FROM groups WHERE id=groupid),
                    'groupid', groupid,
                    'username', (SELECT name FROM users WHERE id=userid),
                    'pictureurl', (SELECT pictureurl FROM users WHERE id=userid)
                                        )FROM post WHERE userid = $1 ORDER BY posted_at DESC`;

  connectionPool
    .query(query, [userId])
    .then(res => response.send(res.rows))
    .catch(err => {
      console.error('Error getting profile feed', err.stack);
      response.status(500);
    });
}

const likePost = (request, response) => {
  let postId = request.body.postid;
  let userId = request.body.userid;

  let postQuery = `UPDATE post
               SET likes = likes + 1
               WHERE id = $1`;

  let userLikesQuery = `INSERT INTO userlikes (id_user, id_post) VALUES ($1, $2)`

  connectionPool
    .query(postQuery, [postId])
    .then((res) => {
      connectionPool.query(userLikesQuery, [userId, postId]).then((res) => {
        response.send(res.rows)
      })
    })
    .catch(err => {
      console.error('Error liking post in feed', err.stack);
      response.status(500);
    });
}

module.exports = { getHomeFeed, getGroupFeed, getProfileFeed, likePost };