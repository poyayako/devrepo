const express = require('express');
const router = express.Router();

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
	console.log('error messages :' + req.flash('error'));
	res.render('login');
});




module.exports = router;

