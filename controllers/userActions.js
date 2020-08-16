const express = require('express');
const usersTable = require('../models/users');
const {loginValidation , registerValidation} = require('./validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
//const authMiddleware = require('../controllers/authMiddleware');


exports.login = (req,res,next) => {
	
	const oldusername = req.body.username;
	const testurl = `?username=${oldusername}`;
	
	passport.authenticate('local',{
	successRedirect: '/',
	failureRedirect: `/login${testurl}`,
	failureFlash: true
	})(req,res,next);
	
}

exports.register = async (req,res,next) => {
	
	let errors = [];
	const validateInput = await registerValidation(req.body);
	//console.log(validateInput.error.details[0].message);
	
	console.log(typeof validateInput.error);
	if(!(typeof validateInput.error == 'undefined')){
			errors.push({msg: validateInput.error.details[0].message});
	}else{

					const {username,email,password,password2} = req.body;
				
				//	const searchResult = await usersTable.validateUserData(username);
				
				
				 //if(searchResult.length <= 2){
				 	//errors.push({msg: `${searchResult[0].COLUMN_NAME} is already taken`});
				 ///}
	 
	}
	
	res.render('register',{registrationErrors:errors});
		
}