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