CREATE TABLE Users (
    UserID int NOT NULL,
   	Username varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,
    PRIMARY KEY (UserID)
);

CREATE TABLE LeoDatabases (
	Databaseid int NOT NULL,
	DatabaseName varchar(255) NOT NULL,
	DatabaseTableCount varchar(255) NOT NULL,
	
