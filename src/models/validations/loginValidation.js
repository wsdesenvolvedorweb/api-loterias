const Joi = require("@hapi/joi")

const loginValidation = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

module.exports = loginValidation