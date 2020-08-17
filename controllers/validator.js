const joi = require('@hapi/joi');

//login form validation

const loginValidation = data => {
	
		console.log(`this data is from joi validation : ${data}`);	
	
	 const schema = joi.object({
	 username : joi.string().min(7).required(),
	 password : joi.string().min(7).required()

	});
	

return schema.validate(data);
	
};

const registerValidation = data => {
	
	const schema = joi.object({
	 
	 username : joi.string().min(7).required(),
	 email : joi.string().email().min(7).required(),
	 password : joi.string().min(7).required(),
	 password2 : joi.string().min(7).required()

	});

return schema.validate(data);
	
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
