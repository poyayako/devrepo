const express = require('express');
const router = express.Router();
const url = require('url');
const bcrypt = require('bcryptjs');

const dbManager = require('../controllers/dbManagerController');
const userActions = require('../controllers/userActions');
const authMiddleware = require('../controllers/authMiddleware');
//const inputValidation = require('../controllers/validator.js');
//Homepage
router.get('/',authMiddleware(),dbManager.showDatabases,(req,res) => {
	console.log('routes req.user'+req.user);
	console.log(req.isAuthenticated());
 res.render('index');
});

//Login Page

router.get('/login',(req,res) =>{
	
	const oldinput = req.query.username;

	if(typeof req.query.username == 'undefined'){
		res.render('login');	
	}else{
		res.render('login',{username:oldinput});
	}
});
//logout Page
router.get('/logout',(req,res) => {
	req.logout();
	req.session.destroy();
	res.redirect('/login');
	
});

//Register Page

router.get('/register',(req,res) =>{

res.render('register');

});


//LOGIN POST HANDLERS

router.post('/user/login',userActions.login);

router.post('/user/register',userActions.register);


module.exports = router;

