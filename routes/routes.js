const express = require('express');
const router = express.Router();
const userAuth = require('../controllers/auth')

router.get('/',(req,res) => {
 res.render('login')
});


router.get('/index',(req,res) => {
 res.render('index')
});


//user auth routes
router.post('/auth/login',userAuth.login);

module.exports = router;

