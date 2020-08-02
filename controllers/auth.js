const express = require('express');
const usersTable = require('../models/users');
const {loginValidation} = require('./validator');
const bcrypt = require('bcryptjs');

exports.login = async (req,res) => {
	
	let validationMsg = loginValidation(req.body);
	
	const {username,password} = req.body;
 
const renderPage = (pagename,data = {}) => {
	 res.render(`${pagename}`,data);
}
 
	if(!(typeof validationMsg.error === 'undefined')){
		
		return res.render('login',
		{
			message : validationMsg.error.details[0].message,
			username : username
		});
	}
	 
	 try{
	
	 const searchResult = await usersTable.searchUser(username);
	 console.log(searchResult);
	 
	 if(!searchResult.length){
	  return res.render('login',
		 {
			 message : 'Username Not Found!',
			 username : username
		 });
	 }else{
	 	 if(!(await bcrypt.compare(password,searchResult[0].password))){
	 	  return res.render('login',
		   {
			   message : 'Incorrect Password!',
			   username : username
		   });
	 	 }else{
	 	 	res.render('index',
		   {
			   message : 'Incorrect Password!',
			   username : username
		   });
	 	 }
	 }
	   
	   
	   
		
	 	
	 }catch(err){
		  console.log(err);
	 }	
	
	console.log(username + ' ' + password);
	
	
	
}
//////////u4j4j4h4h4h4h44h4h4h4h4h4h4h4j4j4j45j4j4j4i5i4i4j4j4j4j4j5j4j5j4j4j4j4j5i4i4i4i4i4i44jj4j4j4j4i44j4j4j4