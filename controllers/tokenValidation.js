const jwt = require('jsonwebtoken');
const express = require('express');

module.exports = (req,res,next) => {
	
	const headers = req.headers;
	console.log(headers);
	const token = req.body.jwt;
	//console.log(token);
	
	if(!token){res.status(400).send('access denied');}

	const verified = jwt.verify(token,process.env.TOKEN_SECRET);
	
	console.log(verified);
	next();
	
}
