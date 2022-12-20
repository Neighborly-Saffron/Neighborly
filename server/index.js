const path = require('path');
const socketIo = require('socket.io');
const https = require('https');
const chat = require('./chat.js');
const express = require('express');
const compression = require('compression');

const userRoutes = require('./routes/user.js');
const feedRoutes = require('./routes/feed.js');
const groupRoutes = require('./routes/group.js');
const groupsRoutes = require('./routes/groups.js');
const adminRoutes = require('./routes/admin.js');
const profileRoutes = require('./routes/profile.js');
const eventRoutes = require('./routes/event.js');

const port = 3001;
const app = express();

const server = https
	.createServer(
		{
			key: fs.readFileSync('key.pem'),
			cert: fs.readFileSync('cert.pem'),
		},
		app
	)
	.listen(port, () => {
		console.log(`App running on port ${port}.`);
	});

const io = socketIo(server, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
	},
}); //in case server and client run on different urls

chat(io);

app.use(compression({ level: 6, threshold: 0 }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.get('*.js', function (req, res, next) {
	req.url = req.url + '.gz';
	res.set('Content-Encoding', 'gzip');
	res.set('Content-Type', 'text/javascript');
	next();
});

app.use('/user', userRoutes);
app.use('/feed', feedRoutes);
app.use('/group', groupRoutes);
app.use('/groups', groupsRoutes);
app.use('/admin', adminRoutes);
app.use('/profile', profileRoutes);
app.use('/event', eventRoutes);

app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname, '../public/index.html'), function (err) {
		if (err) {
			res.status(500).send(err);
		}
	});
});
