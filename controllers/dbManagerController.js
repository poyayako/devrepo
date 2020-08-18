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

exports.showTables = async (req,res,next) => {
	console.log(req.params);
	
	let tables = [];
	let tableNames = [];
	let tableInfo = [];
	
	const dbName = req.params.databasename;
	const dbTables = await dbManager.showTables(dbName);	
	
	//const objCount = Object.keys(dbTables).length;
	
	dbTables.forEach(arrangeTables);
			
	function arrangeTables(item, index){
				let normalObj = Object.assign({}, dbTables[index]);
				 
				tables.push({tables : normalObj[`Tables_in_${dbName}`]});
	}
	
	tables.forEach(arrangeInfo);			
	async function arrangeInfo(item, index){
			const dbTableInfo = await dbManager.showTableInfo(tables[index].tables);
			//tableInfo.push({});
		console.log(dbTableInfo.Field);
	}
		
		
		//	const dbTableInfo = await dbManager.showTableInfo('leodb');			
			// console.log(tableInfo);
	 console.log(tables[0].tables);
	 
	 
	
	res.render('showdbtables',{
		tables:tables
	});
	
}
