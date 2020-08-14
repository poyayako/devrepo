const express = require('express');
const router = express.Router();
const url = require('url');

const userAuth = require('../controllers/auth');
const authMiddleware = require('../controllers/authMiddleware');

//Homepage
router.get('/',authMiddleware(),(req,res) => {
	console.log('routes req.user'+req.user);
	console.log(req.isAuthenticated());
	
 res.render('index');
});

//Login

router.get('/login',(req,res) =>{
	
	const oldinput = req.query.username;

	if(typeof req.query.username == 'undefined'){
		res.render('login');	
	}else{
		res.render('login',{username:oldinput});
	}
});




module.exports = router;

