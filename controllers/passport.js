const localStrategy = require('passport-local').Strategy;
const usersTable = require('../models/users');
const bcrypt = require('bcryptjs');

module.exports = (passport) => {
	passport.use(
		new localStrategy((username,password,done) => {
			console.log(username);
			console.log(password);
	  done(null,false);
	
  }));
  
  
			passport.serializeUser((userID, done) => {
			  done(null, userID);
			});
			 
			passport.deserializeUser((userID, done) => {
			    done(null, userID);
			});

	
	
	
}