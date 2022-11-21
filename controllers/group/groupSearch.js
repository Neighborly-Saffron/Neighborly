const connectionPool = require('../../db/pool.js')


const getInitialGroups = (req, res) => {
	let query = `SELECT json_build_object(
    'group_id', id,
    'name', name,
    'description', description,
    'pictureurl', pictureurl,
    'admin', (SELECT name from users where id = adminid)
  ) FROM groups limit 10`;

	connectionPool
		.query(query)
		.then((data) => res.send(data.rows))
		.catch((err) => {
			console.log(err);
			res.status(500).send(err);
		});
};

const searchGroups = (req, res) => {
	let searchTerm = req.body.query;
	let query = `SELECT json_build_object(
    'group_id', id,
    'name', name,
    'description', description,
    'pictureurl', pictureurl,
    'admin', (SELECT name from users where id = adminid)
  ) FROM groups WHERE name LIKE '%${req.body.query}%'`;

	connectionPool
		.query(query)
		.then((data) => {
			res.send(data.rows);
		})
		.catch((err) => {
			res.status(500).send(err);
		});
};

module.exports = { getInitialGroups, searchGroups};