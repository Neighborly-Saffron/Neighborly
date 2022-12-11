const connectionPool = require('../../../db/pool.js')

const getAdminGroups = (req, res) => {

  const query = `SELECT json_agg (
		              json_build_object(
                    'groupName', name,
                    'groupPic', pictureURL,
                    'groupid', id,
                    'requests', (SELECT COUNT(*) FROM requestjoin WHERE requestjoin.id_group = groups.id)
                  )
	              )AS admingroup
              FROM groups WHERE groups.adminID = $1`

  return connectionPool.query(query, [req.query.userId])
            .then(result => {
              // console.log('result in getAdminGroups:', result)
              res.send(result.rows)
            })
            .catch(err => {
              console.log('Error executing to add group', err.message);
              res.status(500);
            });
}

const userRequests = (req, res) => {
  let groupId = req.params.groupId

  let query = `SELECT json_build_object(
                    'userid', id_user,
                    'groupid', id_group,
                    'username', (SELECT name FROM users WHERE id_user=users.id),
                    'pictureurl', (SELECT pictureurl FROM users WHERE id_user=users.id)
                                        )FROM requestjoin WHERE id_group = $1`;

  connectionPool
    .query(query, [groupId])
    .then(data => res.send(data.rows))
    .catch(err => {
      console.error('Error getting requested users for group admin', err.stack);
      res.status(500);
    });
}

const userApprove = (req, res) => {
  let userId = req.body.userid
  let groupId = req.body.groupid

  let removeRequestQuery = `DELETE FROM requestjoin WHERE id_user = $1 AND id_group = $2`

  let addUserQuery = `INSERT INTO usergroups (id_user, id_group) VALUES ($1, $2)`

  connectionPool
    .query(removeRequestQuery, [userId, groupId])
    .then((data) => {
      connectionPool.query(addUserQuery, [userId, groupId]).then((data) => {
        res.send()
      })
    })
    .catch(err => {
      console.error('Error adding user to group', err.stack);
      res.status(500);
    });
}

const userDecline = (req, res) => {
  let userId = req.body.userid
  let groupId = req.body.groupid

  let removeRequestQuery = `DELETE FROM requestjoin WHERE id_user = $1 AND id_group = $2`

  connectionPool
    .query(removeRequestQuery, [userId, groupId])
    .then((data) => {
        res.send()
    })
    .catch(err => {
      console.error('Error adding user to group', err.stack);
      res.status(500);
    });
}


module.exports = {
  getAdminGroups,
  userRequests,
  userApprove,
  userDecline
 }
