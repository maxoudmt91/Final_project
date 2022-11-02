
CREATE TABLE reservation(
   	reservationID serial,
	playerID VARCHAR(50),
   	reservationFirstname VARCHAR(50),
   	reservationLastname VARCHAR(50),
   	reservationDate DATE,
   	PRIMARY KEY(reservationID),
	FOREIGN KEY (playerID) REFERENCES user_db (user_id)
);

CREATE TABLE user_db(
   	user_id serial,
	firstname VARCHAR(50),
   	lastname VARCHAR(50),
   	user_number VARCHAR(50),
   	age INT,
   	PRIMARY KEY(user_id)
);