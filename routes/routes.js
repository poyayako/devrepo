const express = require('express');
const router = express.Router();

const userAuth = require('../controllers/auth');
const validateToken = require('../controllers/tokenValidation');

//Homepage
router.get('/',(req,res) => {
 res.render('index');
});

//Login

router.get('/login',(req,res) =>{
	res.render('login');
});




module.exports = router;