const express = require('express');
const dbManager = require('../models/dbManager');

exports.showDatabases = async (req,res,next) => {
	
	var databases = [];
	const allDatabases = await dbManager.showAllDatabases();
	console.log(allDatabases);

	allDatabases.forEach(arrangeDB);
	
	function arrangeDB(item, index){
	databases.push({databases : allDatabases[index].Database });
	}
	
	console.log(databases);
	return databases;
	
}

let dbName = "";
exports.showTables = async (req,res) => {
console.log(req.params);
	
	
let tables = [];
let tableinfos = [];



dbName = req.params.databasename;
const dbTables = await dbManager.showTables(dbName);	
	

	dbTables.forEach(arrangeTables);
	
	function arrangeTables(item, index){
	let	normalObj = Object.assign({}, dbTables[index]);
	let tblName = normalObj[`Tables_in_${dbName}`];
	 		tables.push({tables : normalObj[`Tables_in_${dbName}`]});
		
}
console.log(tables);			
		res.render('showdbtables',{
		dbname : dbName,
		tables:tables
  	});
	
}


exports.showTableInfo = async (req,res) => {
			const tblName = req.params.tablename;
			let tableinfos = [];
			const dbTableInfo = await dbManager.showTableInfo(dbName,tblName);
			
			dbTableInfo.forEach(arrangeTableInfo);
	
			function arrangeTableInfo(item, index){
				//let	normalObj = Object.assign({}, dbTables[index]);
				//let tblName = normalObj[`Tables_in_${dbName}`];
		 	//tableinfos.push({tableinfo : normalObj[`Tables_in_${dbName}`]});
		 	tableinfos.push({
		 		tablefield : item.Field,
		 		tabletype : item.Type,
		 		tablenull : item.Null,
		 		tableKey : item.Key,
		 		tabledefault : item.Default,
		 		tableextra : item.Extra
		 	});
		 	
			}
			console.log(tableinfos);
	
res.render('showtableinfo',{tableinfos:tableinfos});
}