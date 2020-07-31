const mysql = require('mysql');
const dbConfig = require('./db');
const dbConnection = mysql.createConnection(dbConfig);


let userData = {};

userData.all = () => {
 return new Promise((resolve,reject) => {
  dbConnection.query(`SELECT * FROM tbl_users`,(err,results) =>{
   if(err) throw err;
   return resolve(results);
  });
});
}

userData.findOne = (colHeader,id) => {
 return new Promise((resolve,reject) => {
  dbConnection.query(`SELECT * FROM tbl_users WHERE ${colHeader} = ?`,[id],(err,results) => {
   if(err) throw err;
   return resolve(results);
  });
});
}



module.exports = userData;