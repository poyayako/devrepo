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
	const {username,email,password,password2} = req.body;
	//console.log(validateInput.error.details[0].message);
	
	console.log(typeof validateInput.error);
	if(!(typeof validateInput.error == 'undefined')){
			errors.push({msg: validateInput.error.details[0].message});
	}else{

				
				
				const checkUsername = await usersTable.validateUserData(username,'username');
				const checkEmail = await usersTable.validateUserData(email,'email');
			
				
			if(checkUsername.length){
					errors.push({msg: 'Username is already exist'});
					username='';
			}
			if(checkEmail.length){
					errors.push({msg: 'Email is already exist'});
			}
			if(password != password2){
					errors.push({msg: 'Password does not match'});
			}
	}
	
 //console.log(checkUsername);
	//console.log(checkEmail);
	//console.log(errors);
	if(errors.length){
		res.render('register',{
			registrationErrors:errors,
			username:username,
			email:email
		});	
	}else{
			bcrypt.hash(req.body.password, 10,await function(err, hash) {
					if(err) throw err;
					
					const addUser = usersTable.addUser(req.body.username,req.body.email,hash);
					res.render('login',{
						success_msg : 'Registration is successful, you can now login!',
						username:req.body.username
					});
			});
	}
	
		
}