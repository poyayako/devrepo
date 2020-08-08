const express = require('express');
const usersTable = require('../models/users');
const {loginValidation} = require('./validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.login = async (req,res) => {
	
	let validationMsg = loginValidation(req.body);
	let errors = [];
	
	const {username,password} = req.body;

 
	if(!(typeof validationMsg.error === 'undefined')){
		errors.push({ msg : validationMsg.error.details[0].message });
	}
  
 const searchResult = await usersTable.searchUser(username);
	 
	if(!searchResult.length){
	  errors.push({ msg : 'Username not found!' });
	}
	
	
	 
	
	

	res.render('login',{
			errors,
			username:username
		});
	
}
//////////u4j4j4h4h4h4h44h4h4h4h4h4h4h4j4j4j45j4j4j4i5i4i4j4j4j4j4j5j4j5j4j4j999999999999