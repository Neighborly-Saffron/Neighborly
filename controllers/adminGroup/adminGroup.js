const connectionPool = require('../../db/pool.js')

const getAdminGroups = (req, res) => {
  const query = `SELECT json_agg (
		              json_build_object(
                    'groupName', name,
                    'groupPic', pictureURL
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

const getRequestedGroups = (req, res) => {

  // console.log('it got in Controller>getAdminGroups')
  // console.log('req.query inside Controller>getAdminGroups:', req.query)

  const query = `SELECT json_agg (
    json_build_object(
      'requestedUserId', id_user,
      'requestedGroupId', id_group,
'userName',
(select name from users where users.id=id_user),
'groupName', (select name from groups where groups.id=id_group),
'userProfile', (select pictureURL from users where users.id=id_user )
    )
   )AS request
  FROM requestjoin`

  return connectionPool.query(query)
            .then(result => {
              // console.log('result in big query:', result)
              res.send(result.rows[0].request)
            })
            .catch(err => {
              console.error('Error executing to add group', err.message);
              res.status(500);
            });
}
const approveJoin = (req, res) => {
  var queryUserGroups = `INSERT INTO usergroups (id_user, id_group) VALUES ($1, $2)`
  console.log('req.body:', req.body)
  console.log('req.body.userId:', req.body.userId)
  console.log('req.body.groupId:', req.body.groupId)

  return connectionPool
    .query(queryUserGroups, [req.body.userId, req.body.groupId])
      .then(result =>
        res.send())
      .catch(err => {
        console.error('controller failed to post approval to db', err.message);
        res.status(500);
      });
}

const removeJoinRequest = (req, res) => {
  // console.log('req.body in removeJoin:', req.body)
  // console.log('req.header.params in removeJoin:', req.params)
  console.log('req.query in removeJoin:', req.query)
  const query = `DELETE FROM requestjoin WHERE id_user=$1 and id_group=$2`
  return connectionPool
  .query(query, [req.query.userId, req.query.groupId])
    .then(result =>
      res.send())
    .catch(err => {
      console.error('controller failed to delete from db', err.message);
      res.status(500);
    });
}


module.exports = {
  getAdminGroups,
  getRequestedGroups,
  approveJoin,
  removeJoinRequest
 }
