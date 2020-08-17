const mysql = require('mysql');
const dbConfig = require('./db');
const dbConnection = mysql.createConnection(dbConfig);


let databaseManager = {};

databaseManager.all = () => {
	return new Promise((resolve,reject) => {
	  dbConnection.query(`show databases`,(err,results) =>{
	   if(err) throw reject(err);
	   return resolve(results);
	  });
	});
}
