const express = require('express');
const router = express.Router();
const passport = require('passport');

const userAuth = require('../controllers/auth');
//const validateToken = require('../controllers/tokenValidation');

//handlers

router.post('/login',passport.authenticate('local',{
	successRedirect: '/',
	failureRedirect: '/login'
}));

module.exports = router;