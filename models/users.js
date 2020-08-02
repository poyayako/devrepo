const mysql = require('mysql');
const dbConfig = require('./db');
const dbConnection = mysql.createConnection(dbConfig);


let userData = {};

userData.all = () => {
 return new Promise((resolve,reject) => {
  dbConnection.query(`SELECT * FROM tbl_users`,(err,results) =>{
   if(err) throw reject(err);
   return resolve(results);
  });
});
}

userData.searchUser = (username) => {
 return new Promise((resolve,reject) => {
  dbConnection.query(`SELECT * FROM tbl_users WHERE username = ? or email = ?`,[username,username],(err,results) => {
   if(err) throw err;
   return resolve(results);
  });
});
}



module.exports = userData;