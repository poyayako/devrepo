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

userData.validateUserData = (userdata) =>{
	return new Promise((resolve,reject) => {
		dbConnection.query(`select COLUMN_NAME from INFORMATION_SCHEMA.COLUMNS WHERE COLUMN_NAME = 'userid' UNION ALL select userid from Users where username = ?`,[userdata],(err,results) => {
		
			if(err) throw err;
   return resolve(results);
			
	 });
});
	
}


module.exports = userData;