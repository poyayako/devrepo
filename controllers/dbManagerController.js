const express = require('express');
const dbManager = require('../models/dbManager');

exports.showDatabases = async (req,res,next) => {
	console.log('dbmanager initiated');
	var databases = [];
	const allDatabases = await dbManager.showAllDatabases();
	console.log(allDatabases);
	
	
allDatabases.forEach(arrangeDB);
function arrangeDB(item, index) {
  
  databases.push({databases : allDatabases[index].Database });
}
console.log(databases);
return databases;
	
}
