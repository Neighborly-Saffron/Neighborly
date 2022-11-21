COPY users(id, authId, name, bio, pictureURL) FROM '/Users/huongnguyen/Documents/hr/blue-ocean/Neighborly/exampleData/users.csv'
DELIMITER ','
CSV HEADER;

COPY groups(id, name, description, pictureURL, adminID) FROM '/Users/huongnguyen/Documents/hr/blue-ocean/Neighborly/exampleData/groups.csv'
DELIMITER ','
CSV HEADER;

COPY post(id, message, likes, posted_at, userID, groupID) FROM '/Users/huongnguyen/Documents/hr/blue-ocean/Neighborly/exampleData/post.csv'
DELIMITER ','
CSV HEADER;


COPY event(id, name, location, description, pictureURL, groupID, adminID) FROM '/Users/huongnguyen/Documents/hr/blue-ocean/Neighborly/exampleData/event.csv'
DELIMITER ','
CSV HEADER;

COPY attending(id, id_user, id_event) FROM '/Users/huongnguyen/Documents/hr/blue-ocean/Neighborly/exampleData/attending.csv'
DELIMITER ','
CSV HEADER;

COPY requestJoin(id, id_user, id_group) FROM '/Users/huongnguyen/Documents/hr/blue-ocean/Neighborly/exampleData/requestJoin.csv'
DELIMITER ','
CSV HEADER;

COPY usergroups(id, id_user, id_group) FROM '/Users/huongnguyen/Documents/hr/blue-ocean/Neighborly/exampleData/usergroups.csv'
DELIMITER ','
CSV HEADER;

SELECT setval('users_id_seq', COALESCE((SELECT MAX(id)+1 FROM users), 1), false);
SELECT setval('groups_id_seq', COALESCE((SELECT MAX(id)+1 FROM groups), 1), false);
SELECT setval('post_id_seq', COALESCE((SELECT MAX(id)+1 FROM post), 1), false);
SELECT setval('event_id_seq', COALESCE((SELECT MAX(id)+1 FROM event), 1), false);
SELECT setval('attending_id_seq', COALESCE((SELECT MAX(id)+1 FROM attending), 1), false);
SELECT setval('requestJoin_id_seq', COALESCE((SELECT MAX(id)+1 FROM requestJoin), 1), false);
SELECT setval('usergroups_id_seq', COALESCE((SELECT MAX(id)+1 FROM usergroups), 1), false);