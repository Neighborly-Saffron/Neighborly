const connectionPool = require('../../db/pool.js')

const getAdminGroups = (req, res) => {

  // console.log('it got in Controller>getAdminGroups')
  // console.log('req.query inside Controller>getAdminGroups:', req.query)

  const query = `SELECT json_agg (
		              json_build_object(
                    'groupName', name,
                    'groupPic', pictureURL
                  )
	              )AS admingroup
              FROM groups WHERE groups.adminID = 5`

  return connectionPool.query(query)
            .then(result => {
              // console.log('result in getAdminGroups:', result)
              res.send(result.rows[0].admingroup)
            })
            .catch(err => {
              console.error('Error executing to add group', err.message);
              res.status(500);
            });
}

const getRequestedGroups = (req, res) => {

  // console.log('it got in Controller>getAdminGroups')
  // console.log('req.query inside Controller>getAdminGroups:', req.query)

  const query = `SELECT json_agg (
    json_build_object(
      'requestedUser', id_user,
      'requestedGroup', id_group,
'userName',
(select name from users where users.id=id_user),
'groupName', (select name from groups where groups.id=id_group),
'userProfile', (select pictureURL from users where users.id=id_user )
    )
   )AS request
  FROM requestjoin`

  return connectionPool.query(query)
            .then(result => {
              console.log('result in big query:', result)
              res.send(result.rows[0].request)
            })
            .catch(err => {
              console.error('Error executing to add group', err.message);
              res.status(500);
            });
}



module.exports = {
  getAdminGroups,
  getRequestedGroups
 }
