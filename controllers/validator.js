const joi = require('@hapi/joi');

//login form validation

const loginValidation = data => {
	
	const schema = joi.object({
	 
	 username : joi.string().min(6).required(),
	 password : joi.string().min(6).required()

	});

return schema.validate(data);
	
};

const registerValidation = data => {
	
	const schema = joi.object({
	 
	 username : joi.string().min(6).required(),
	 email : joi.string().email().min(6).required(),
	 password : joi.string().min(6).required(),
	 password2 : joi.string().min(6).required()

	});

return schema.validate(data);
	
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
