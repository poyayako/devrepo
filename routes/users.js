const express = require('express');
const router = express.Router();

const userAuth = require('../controllers/auth');
const validateToken = require('../controllers/tokenValidation');

//handlers

router.post('/login',userAuth.login);

module.exports = router;