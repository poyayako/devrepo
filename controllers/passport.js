const localStrategy = require('passport-local').Strategy;
const usersTable = require('../models/users');
const bcrypt = require('bcryptjs');
const {loginValidation} = require('./validator');

let msg = [];

module.exports = (passport) => {
	
		passport.use(
			new localStrategy(async (username,password,done) => {
				console.log(username);
				console.log(password);
				const inputs = {username:username,password:password};
				let validationMsg = loginValidation(inputs);
		  let errors = [];
		 
		  console.log(validationMsg);
		  
		 if(!(typeof validationMsg.error === 'undefined')){
					errors.push({ msg : validationMsg.error.details[0].message });
				 console.log(errors[0].msg);
				 return done(null,false,{message: errors[0].msg });
		 }
	  
	  const searchUser = await usersTable.searchUser(username);
	  
	  console.log(searchUser);
	  
	  if(!searchUser.length){
	  	console.log();
	  }
	  
	  
	  
	  
  }));
  
  
			passport.serializeUser((userID, done) => {
			  done(null, userID);
			});
			 
			passport.deserializeUser((userID, done) => {
			    done(null, userID);
			});

}

