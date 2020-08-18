const mysql = require('mysql');
const dbConfig = require('./db');
const dbConnection = mysql.createConnection(dbConfig);


let databaseManager = {};

exports.showAllDatabases = () => {
	return new Promise((resolve,reject) => {
	  dbConnection.query(`show databases`,(err,results) =>{
	   if(err) throw reject(err);
	   return resolve(results);
	  });
	});
}

exports.showTables = (databaseName) => {
	return new Promise((resolve,reject) => {
	  dbConnection.query(`use ${databaseName}; show tables;`,(err,results) =>{
	   if(err) throw reject(err);
	   return resolve(results[1]);
	  });
	});
}


exports.showTableInfo = (tableName) => {
	return new Promise((resolve,reject) => {
	  dbConnection.query(`describe ${tableName}`,(err,results) =>{
	   if(err) throw reject(err);
	   return resolve(results);
	  });
	});
}
