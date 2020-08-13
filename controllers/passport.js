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
	  //const searchResult = await usersTable.searchUser(username);
	  console.log(validationMsg);
	  
	 if(!(typeof validationMsg.error === 'undefined')){
		//errors.push({ msg : validationMsg.error.details[0].message });
	 //console.log(errors);
	 return done(null,false,{message: 'invalid username'});
	 }
	  
	  //console.log(searchResult);
	  
	  //done(null,'didjdidi',{errors:errors});
  }));
  
  
			passport.serializeUser((userID, done) => {
			  done(null, userID);
			});
			 
			passport.deserializeUser((userID, done) => {
			    done(null, userID);
			});

	
	
}