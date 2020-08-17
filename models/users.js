const mysql = require('mysql');
const dbConfig = require('./db');
const dbConnection = mysql.createConnection(dbConfig);


let userData = {};

userData.all = () => {
	return new Promise((resolve,reject) => {
	  dbConnection.query(`SELECT * FROM Users`,(err,results) =>{
	   if(err) throw reject(err);
	   return resolve(results);
	  });
	});
}

userData.searchUser = (username) => {
	return new Promise((resolve,reject) => {
	  dbConnection.query(`SELECT * FROM Users WHERE username = ? or email = ?`,[username,username],(err,results) => {
	   if(err) throw err;
	   return resolve(results);
	  });
	});
}

userData.validateUserData = (userdata,column) =>{
	return new Promise((resolve,reject) => {
		dbConnection.query(`SELECT ${column} FROM Users WHERE ${column} = ?`,[userdata],(err,results) => {
		
			if(err) throw err;
  	return resolve(results);
			
	 });
});
	
}

userData.addUser = (username,email,password) =>{
	return new Promise((resolve,reject) => {
		dbConnection.query(`INSERT INTO Users(username,email,password) values(?,?,?)`,[username,email,password],(err,results) => {
			if(err) throw err;
  	return resolve(results);
	 });
});
}
module.exports = userData;