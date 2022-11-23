DROP TABLE IF EXISTS users cascade;

CREATE TABLE users (
 id BIGSERIAL,
 authId VARCHAR UNIQUE,
 name VARCHAR,
 bio VARCHAR,
 pictureURL VARCHAR
);

ALTER TABLE users ADD CONSTRAINT users_pkey PRIMARY KEY (id);

DROP TABLE IF EXISTS post cascade;

CREATE TABLE post (
 id BIGSERIAL,
 message VARCHAR,
 likes INTEGER,
 posted_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
 userID INTEGER,
 groupID INTEGER
);

ALTER TABLE post ADD CONSTRAINT post_pkey PRIMARY KEY (id);

DROP TABLE IF EXISTS groups cascade;

CREATE TABLE groups (
 id BIGSERIAL,
 name VARCHAR,
 description VARCHAR,
 pictureURL VARCHAR,
 adminID INTEGER
);

ALTER TABLE groups ADD CONSTRAINT groups_pkey PRIMARY KEY (id);

DROP TABLE IF EXISTS event cascade;

CREATE TABLE event (
 id BIGSERIAL,
 name VARCHAR,
 location VARCHAR,
 lat DECIMAL,
 lng DECIMAL,
 date DATE,
 time TIME,
 description VARCHAR,
 pictureURL VARCHAR,
 groupID INTEGER,
 adminID INTEGER
);

ALTER TABLE event ADD CONSTRAINT event_pkey PRIMARY KEY (id);

DROP TABLE IF EXISTS usergroups cascade;

CREATE TABLE usergroups (
 id BIGSERIAL,
 id_user INTEGER,
 id_group INTEGER
);

ALTER TABLE usergroups ADD CONSTRAINT usergroups_pkey PRIMARY KEY (id);

DROP TABLE IF EXISTS attending cascade;

CREATE TABLE attending (
 id BIGSERIAL,
 id_user INTEGER,
 id_event INTEGER
);

ALTER TABLE attending ADD CONSTRAINT attending_pkey PRIMARY KEY (id);

DROP TABLE IF EXISTS requestJoin cascade;

CREATE TABLE requestJoin (
 id BIGSERIAL,
 id_user INTEGER,
 id_group INTEGER
);


ALTER TABLE requestJoin ADD CONSTRAINT requestJoin_pkey PRIMARY KEY (id);

ALTER TABLE post ADD CONSTRAINT post_userID_fkey FOREIGN KEY (userID) REFERENCES users(id);
ALTER TABLE post ADD CONSTRAINT post_groupID_fkey FOREIGN KEY (groupID) REFERENCES groups(id);
ALTER TABLE groups ADD CONSTRAINT groups_adminID_fkey FOREIGN KEY (adminID) REFERENCES users(id);
ALTER TABLE event ADD CONSTRAINT event_groupID_fkey FOREIGN KEY (groupID) REFERENCES groups(id);
ALTER TABLE event ADD CONSTRAINT event_adminID_fkey FOREIGN KEY (adminID) REFERENCES users(id);
ALTER TABLE usergroups ADD CONSTRAINT usergroups_userID_fkey FOREIGN KEY (id_user) REFERENCES users(id);
ALTER TABLE usergroups ADD CONSTRAINT usergroups_groupID_fkey FOREIGN KEY (id_group) REFERENCES groups(id);
ALTER TABLE attending ADD CONSTRAINT attending_id_user_fkey FOREIGN KEY (id_user) REFERENCES users(id);
ALTER TABLE attending ADD CONSTRAINT attending_id_event_fkey FOREIGN KEY (id_event) REFERENCES event(id);
ALTER TABLE requestJoin ADD CONSTRAINT requestJoin_id_user_fkey FOREIGN KEY (id_user) REFERENCES users(id);
ALTER TABLE requestJoin ADD CONSTRAINT requestJoin_id_group_fkey FOREIGN KEY (id_group) REFERENCES groups(id);

