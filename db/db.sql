CREATE TABLE user (
 id BIGSERIAL,
 name VARCHAR,
 bio VARCHAR,
 pictureURL VARCHAR
);


ALTER TABLE user ADD CONSTRAINT user_pkey PRIMARY KEY (id);

CREATE TABLE post (
 id BIGSERIAL,
 message VARCHAR,
 likes INTEGER,
 userID INTEGER,
 groupID INTEGER
);


ALTER TABLE post ADD CONSTRAINT post_pkey PRIMARY KEY (id);

CREATE TABLE group (
 id BIGSERIAL,
 name VARCHAR,
 pictureURL VARCHAR,
 adminID INTEGER
);


ALTER TABLE group ADD CONSTRAINT group_pkey PRIMARY KEY (id);

CREATE TABLE event (
 id BIGSERIAL,
 name VARCHAR,
 location VARCHAR,
 description VARCHAR,
 pictureURL VARCHAR,
 groupID INTEGER,
 adminID INTEGER
);


ALTER TABLE event ADD CONSTRAINT event_pkey PRIMARY KEY (id);

CREATE TABLE user-group (
 id BIGSERIAL,
 userID INTEGER,
 groupID INTEGER
);


ALTER TABLE user-group ADD CONSTRAINT user-group_pkey PRIMARY KEY (id);

CREATE TABLE attending (
 id BIGSERIAL,
 id_user INTEGER,
 id_event INTEGER
);


ALTER TABLE attending ADD CONSTRAINT attending_pkey PRIMARY KEY (id);

CREATE TABLE requestJoin (
 id BIGSERIAL,
 id_user INTEGER,
 id_group INTEGER
);


ALTER TABLE requestJoin ADD CONSTRAINT requestJoin_pkey PRIMARY KEY (id);

ALTER TABLE post ADD CONSTRAINT post_userID_fkey FOREIGN KEY (userID) REFERENCES user(id);
ALTER TABLE post ADD CONSTRAINT post_groupID_fkey FOREIGN KEY (groupID) REFERENCES group(id);
ALTER TABLE group ADD CONSTRAINT group_adminID_fkey FOREIGN KEY (adminID) REFERENCES user(id);
ALTER TABLE event ADD CONSTRAINT event_groupID_fkey FOREIGN KEY (groupID) REFERENCES group(id);
ALTER TABLE event ADD CONSTRAINT event_adminID_fkey FOREIGN KEY (adminID) REFERENCES user(id);
ALTER TABLE user-group ADD CONSTRAINT user-group_userID_fkey FOREIGN KEY (userID) REFERENCES user(id);
ALTER TABLE user-group ADD CONSTRAINT user-group_groupID_fkey FOREIGN KEY (groupID) REFERENCES group(id);
ALTER TABLE attending ADD CONSTRAINT attending_id_user_fkey FOREIGN KEY (id_user) REFERENCES user(id);
ALTER TABLE attending ADD CONSTRAINT attending_id_event_fkey FOREIGN KEY (id_event) REFERENCES event(id);
ALTER TABLE requestJoin ADD CONSTRAINT requestJoin_id_user_fkey FOREIGN KEY (id_user) REFERENCES user(id);
ALTER TABLE requestJoin ADD CONSTRAINT requestJoin_id_group_fkey FOREIGN KEY (id_group) REFERENCES group(id);