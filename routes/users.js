const express = require('express');
const router = express.Router();
const passport = require('passport');

const userAuth = require('../controllers/auth');
//const validateToken = require('../controllers/tokenValidation');

//handlers

router.post('/login',(req,res,next) => {
	const oldusername = req.body.username;
	//console.log('this old username'+oldusername);
	const testurl = `?username=${oldusername}`;

	//res.local.username = username;
	passport.authenticate('local',{
	successRedirect: '/',
	failureRedirect: `/login${testurl}`,
	failureFlash: true
})(req,res,next);
	
});

module.exports = router;